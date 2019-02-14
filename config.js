'use strict';

const
    path = require('path'),
    fs = require('fs'),
    dirApp = fs.realpathSync(process.cwd()),
    absPath = relativePath => path.resolve(dirApp, relativePath),
    pathSrc = absPath('src'),
    pathBuild = absPath('build'),
    lessFiles = ['main.less', 'modal.less', 'media.less'],
    jsFiles = ['feats.js',
      'feats-syntax.js',
      'feats-func.js',
      'feats-builtins.js',
      'feats-object.js',
      'feats-arrays.js',
      'feats-strings.js',
      'feats-regex.js',
      'test.js'];


module.exports = {
    pathSrc,
    pathBuild,
    templateSrc: path.join(pathSrc, 'page.html'),
    lessSrcs: lessFiles.map(fn => path.join(pathSrc, fn)),
    jsSrcs: jsFiles.map(fn => path.join(pathSrc, fn)),
    indexHtml: path.join(pathBuild, 'index.html')
};
