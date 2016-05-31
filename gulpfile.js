var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('copy:js:vendors', function() {
  return gulp.src([
      './bower_components/jquery/dist/jquery.min.js',
      './bower_components/Materialize/dist/js/materialize.min.js'])
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy:js', function() {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(uglify({mangle: false}))
    .pipe(rename('script.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy:css:vendors', function() {
  return gulp.src('./bower_components/Materialize/dist/css/materialize.min.css')
    .pipe(cleanCSS({keepSpecialComments : 0}))
    .pipe(rename('vendors.css'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('copy:css', function() {
  return gulp.src('./src/styles/**/*.css')
    .pipe(cleanCSS({keepSpecialComments : 0}))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('copy:fonts', function() {
  return gulp.src('./bower_components/Materialize/dist/fonts/roboto/**')
    .pipe(gulp.dest('./dist/fonts/roboto/'));
});

gulp.task('copy:html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'))
});

gulp.task('copy:images', function() {
  return gulp.src('src/images/**/*.jpg')
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('dist/'))
});

gulp.task('default', [
  'copy:js:vendors',
  'copy:js',
  'copy:css:vendors',
  'copy:css',
  'copy:fonts',
  'copy:html',
  'copy:images'
]);
