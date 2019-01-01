'use strict';

const
    path = require('path'),
    fs = require('fs'),
    dirApp = fs.realpathSync(process.cwd()),
    absPath = relativePath => path.resolve(dirApp, relativePath),
    pathSrc = absPath('src'),
    pathBuild = absPath('build'),
    lessFiles = ['main.less', 'modal.less', 'small.less', 'medium-up.less', 'medium.less', 'large.less'],
    jsFiles = ['p1-feats.js', 'p2-test.js'];


module.exports = {
    pathSrc,
    pathBuild,
    templateSrc: path.join(pathSrc, 'page.html'),
    lessSrcs: lessFiles.map(fn => path.join(pathSrc, fn)),
    jsSrcs: jsFiles.map(fn => path.join(pathSrc, fn)),
    indexHtml: path.join(pathBuild, 'app.html')
};