const gulp = require('gulp');
const sequence = require('gulp-sequence');

copy = {
  copyCSS: function(){
    gulp.src('./css/**/*')
      .pipe(gulp.dest('./build/css'))
  },
  copyImages: function(){
    gulp.src('./images/**/*')
      .pipe(gulp.dest('./build/images'))
  },
  // don't copy the JS folder. Webpack will handle it.
  // copyJs: function(){
  //   gulp.src('./js/**/*')
  //     .pipe(gulp.dest('./build/js'))
  // },

  // copy only the .html files. exclude package.json.
  copyRoot: function(){
    gulp.src(['./*.html', '!./package.json'])
      .pipe(gulp.dest('./build'))
  }
};

gulp.task('copyCSS', copy.copyCSS);
gulp.task('copyImages', copy.copyImages);
gulp.task('copyJs', copy.copyJs);
gulp.task('copyRoot', copy.copyRoot);
gulp.task('copyAll', function(cb){
  sequence('copyCSS', 'copyImages', 'copyJs', 'copyRoot', cb);
});
