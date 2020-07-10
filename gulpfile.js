const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const { src, series, parallel, dest, watch } = require('gulp');

const jsPath = './js/*.js';
const cssPath = './css/*.css';

function copyHtml() {
  return src('./index.html')
    .pipe(
      gulp.dest('dist')
    );
}

function optimizeImages() {
  return src('./images/*').pipe(
    imageMin()
  ).pipe(
    gulp.dest('dist/images')
  );
}

function jsTask() {
  return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(
      'dist/assets/js'
    ));
}

function cssTask() {
  return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('style.js'))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(
      'dist/assets/css'
    ));
}

exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.optimizeImages = optimizeImages;
exports.copyHtml = copyHtml;
exports.default = parallel(
  copyHtml, 
  optimizeImages,
  jsTask,
  cssTask
);