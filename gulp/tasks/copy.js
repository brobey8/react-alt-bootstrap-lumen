var gulp            = require('gulp');
var sass            = require('gulp-ruby-sass');
var autoprefixer    = require('gulp-autoprefixer');
var rename          = require('gulp-rename');
var notify          = require('gulp-notify');

gulp.task('copy', ['clean'], function () {
    gulp.src('./node_modules/leaflet.label/**', { base: './node_modules/' })
        .pipe(gulp.dest('public/lib'))
        .pipe(notify({ message:'Copy task complete' }));
});