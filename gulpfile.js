var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('test', function () {
  'use strict';
  return gulp.src('./bin/lunkcrypt')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish))
  .pipe(jshint.reporter('fail'));
});