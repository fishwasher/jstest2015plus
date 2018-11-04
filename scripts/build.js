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
    jsStr = fs.readFileSync(config.jsSrc).toString(),
    cssStr, cssMinStr, jsMinStr, html, result, error;

  logger.info('processing .less into .css');

  try {
    //result = await less.render(lessStr, {plugins: [autoprefix]});
    result = await less.render(lessStr);
    cssStr = result.css;
    if (!cssStr) {
      error = result.error || new Error('LESS processing failed');
      throw error;
    }
    result = new CleanCSS().minify(cssStr);
    if (!result.styles) {
      error = result.error || new Error('minifying CSS failed');
      throw error;
    }
    cssMinStr = result.styles;
  } catch(x) {
    logger.error('Error processing CSS: ' + x);
    throw x;
  }

  logger.info('minifying JS');

  try {
    result = UglifyJS.minify(jsStr);
    if (!result.code) {
      error = result.error || new Error('minifying JS failed');
      throw error;
    }
    jsMinStr = result.code;
  } catch(x) {
    logger.error('Error processing JS: ' + x);
    throw x;
  }
  context.STYLE = cssMinStr;
  context.JS = jsMinStr;

  logger.info('rendering page template');

  html = nunjucks.render(config.templateSrc, context);

  fs.writeFileSync(config.indexHtml, html);

  logger.info('Build process is done.')
}

build();
