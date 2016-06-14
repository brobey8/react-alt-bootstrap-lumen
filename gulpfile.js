process.env.DISABLE_NOTIFIER = true

var requireDir  = require('require-dir');
var gulp        = require('gulp');
var bower = require('gulp-bower');

requireDir('./gulp/tasks', {recurse: true});
