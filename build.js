'use strict';

process.on('unhandledRejection', err => {
  console.log(err);
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
    Terser = require('terser'),
    CleanCSS = require('clean-css'),
    config = require('./config.js'),
    context = require('./context.js').create();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [new winston.transports.Console()]
});

const joinFilesStr = fileList => {
  return fileList.map(fpath => {
    return fs.readFileSync(fpath).toString();
  }).join('\n');
};


async function build() {
  fs.emptyDirSync(config.pathBuild);

  let
    lessStr = joinFilesStr(config.lessSrcs),
    jsStr = joinFilesStr(config.jsSrcs),
    cssStr, cssMinStr, jsMinStr, html, result, error;

  logger.info('processing .less into .css');

  try {
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
  
  let opts = {
      mangle: {
          toplevel: true
      }
  };

  try {
    result = Terser.minify(jsStr, opts);
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
