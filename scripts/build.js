'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const
    path = require('path'),
    fs = require('fs-extra'),
    gulp = require('gulp'),
    nunjucks = require('nunjucks'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    config = require('../config.js');

fs.emptyDirSync(config.pathBuild);