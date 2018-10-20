'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const isDocker = process.env.CONTAINER === 'docker';

const
    path = require('path'),
    fs = require('fs-extra'),
    winston = require('winston'),
    nunjucks = require('nunjucks'),
    less = require('less'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] }),
    UglifyJS = require('uglify-js'),
    CleanCSS = require('clean-css'),
    config = require('../app/config.js'),
    context = require('../app/context.js').create();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [new winston.transports.Console()]
});




async function build() {
  fs.emptyDirSync(config.pathBuild);

  let
    lessStr = fs.readFileSync(config.lessSrc).toString(),
    jsStr = fs.readFileSync(config.jsSrc).toString();

  logger.info('processing .less into .css');

  let proc, css;
  try {
    //proc = await less.render(lessStr, {plugins: [autoprefix]});
    proc = await less.render(lessStr);
    css = proc.css;
  } catch(x) {
    logger.error('Error in less.render: ' + x);
    throw x;
  }


  logger.info('minifying CSS');

  let style = new CleanCSS().minify(css);

  logger.info('typeof style is ' + typeof style);
  logger.info(Object.keys(style).join());
  logger.info('style.styles: ' + style.styles);

  context.STYLE = style.styles;

  logger.info('minifying JS');

  let js = UglifyJS.minify(jsStr);
  if (js.error) {
    logger.error('UglifyJS.minify');
    logger.error(js.error);
  } else if (js.code) {
    jsStr = js.code;
  }

  //logger.info('typeof js is ' + typeof js);
  //logger.info(Object.keys(js).join());

  context.JS = jsStr;

  logger.info('processing page template');
  const html = nunjucks.render(config.templateSrc, context);

  fs.writeFileSync(config.indexHtml, html);
}

build()
  .then(logger.info('Build process is done.'))
  .catch(err => logger.error(err));
