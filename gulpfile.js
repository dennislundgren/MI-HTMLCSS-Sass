const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'));
const csso = require('gulp-csso')
const rename = require('gulp-rename')

gulp.task('compile', function() {
  return gulp 
    .src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(csso())
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
});

gulp.task('watch-scss', function() {
  gulp.watch('scss/main.scss', gulp.series('compile'));
});

gulp.task('default', gulp.series('compile', 'watch-scss'), function() {});