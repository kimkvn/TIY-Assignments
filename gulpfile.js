var gulp = require('gulp');

gulp.task('greeting', function(){
  console.log('hello');
});

gulp.task('default', ['greeting']);
