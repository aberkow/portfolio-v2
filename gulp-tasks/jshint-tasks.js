const gulp = require('gulp');
const jshint = require('gulp-jshint');

gulp.task('jshint', function() {
  return gulp.src('js/*.js')
              .pipe(jshint())
              .pipe(jshint.reporter('jshint-stylish'));
});
