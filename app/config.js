'use strict';

const
    path = require('path'),
    fs = require('fs'),
    dirApp = fs.realpathSync(process.cwd()),
    absPath = relativePath => path.resolve(dirApp, relativePath),
    pathSrc = absPath('src'),
    pathBuild = absPath('build');


module.exports = {
    pathSrc,
    pathBuild,
    templateSrc: path.join(pathSrc, 'page.html'),
    lessSrc: path.join(pathSrc, 'styles.less'),
    jsSrc: path.join(pathSrc, 'js2015plus.js'),
    indexHtml: path.join(pathBuild, 'app.html')
};
