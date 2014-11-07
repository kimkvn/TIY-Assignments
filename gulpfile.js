var gulp = require('gulp');
webserver = require('gulp-webserver');
connect = require('gulp-connect');


gulp.task('connect', function(){
  connect.server();
});

gulp.task('greeting', function(){
  console.log('hello');
});

gulp.task('default', ['greeting', 'connect']);
