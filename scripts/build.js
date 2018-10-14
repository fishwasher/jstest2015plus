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

  const
    lessStr = fs.readFileSync(config.lessSrc),
    jsStr = fs.readFileSync(config.jsSrc);

  logger.info('processing .less into .css');
  //const css = await less.render(lessStr, {plugins: [autoprefix]});
  const css = await less.render(lessStr);

  logger.info('minifying CSS');
  context.STYLE = new CleanCSS().minify(css);

  logger.info('minifying JS');
  context.JS = UglifyJS.minify(jsStr);

  logger.info('processing page template');
  const html = nunjucks.render(config.templateSrc, context);

  fs.writeFileSync(config.indexHtml, html);
}

build()
  .then(logger.info('Build process is done.'))
  .catch(err => logger.error(err));
