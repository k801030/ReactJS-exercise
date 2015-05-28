var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], function() {
  // default task
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: ["public/**/*.*", "views/*.*", "views/**/*.*"],
    browser: "google chrome",
    port: 7000
  });

});

gulp.task('nodemon', function() {
  return nodemon({
    script: './bin/www'
  }).on('start', function(){

  })
});

