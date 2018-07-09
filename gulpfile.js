"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var path = require("path");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var browserSync = require("browser-sync").create();


gulp.task("style", function () {
  return gulp.src("less/style.less")
  	.pipe(plumber())
    .pipe(less({
      paths: [ path.join(__dirname, "less", "includes") ]
    }))
    .pipe(postcss([
    	autoprefixer()
    	]))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

gulp.task("serve", ["style"], function() {
	browserSync.init({
		server: ".",
		notify: false,
		open: true,
		cors: true,
		ui: false
	});

	gulp.watch("less/**/*.less", ["style"]);
	gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("less/**/*.less").on("change", browserSync.reload);
}); 
