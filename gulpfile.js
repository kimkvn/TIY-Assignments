var gulp = require('gulp');
webserver = require('gulp-webserver');
connect = require('gulp-connect');

gulp.task('html', function(){
  return gulp.src('GH_Profile/*.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('server', function(){
  return gulp.src('dist')
  .pipe.watch(webserver({ livereload: true}));
});

gulp.task('watch', function() {
  gulp.watch('GH_Profile/*.html', ['html']);
});

gulp.task('connect', function(){
  connect.server();
});

gulp.task('reload', function reload(){
  if (webserver.reload) {
    return webserver.reload();
  }
  return gutil.noop();
});

gulp.task('greeting', function(){
  console.log('hello');
});

gulp.task('default', ['greeting', 'connect']);
