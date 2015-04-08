var gulp = require('gulp'),
	concatCSS = require ('gulp-concat-css'),
	rename = require ('gulp-rename'),
	prefix = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	minifyCSS = require('gulp-minify-css'),
	less = require('gulp-less'),
	watch = require('gulp-watch');
// server connect
gulp.task('connect', function () {
	connect.server({
		root: '',
		livereload:true
	});
});

//css

gulp.task('less', function () {
  gulp.src('less/style.less')
  .pipe(less())
  .pipe(prefix('last 2 version', '> 1%', 'ie 9'))
  .pipe(minifyCSS(''))
  .pipe(rename("style.css"))
  .pipe(gulp.dest('css/'))
  .pipe(connect.reload());
});

//html
gulp.task('html', function () {
	gulp.src('index.html')
	.pipe(connect.reload());
})

//watch

gulp.task('watch', function () {
	gulp.watch('index.html', ['html'])
	gulp.watch('less/**/*.less', ['less'])
}) 

//default
gulp.task('default', ['connect', 'html', 'less', 'watch']);