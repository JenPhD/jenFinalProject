var gulp = require('gulp'),
sass= require('gulp-ruby-sass');

gulp.task('default', function () { console.log('Hello Gulp!') });

gulp.task('sass', function() {
	return sass('public/assets/css/style.scss', {
		sourcemap: true,
		style: 'compressed'
	})
	.on('error', function(err){
		console.log("Error!", err.message);
	})
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('public/assets/css'));
});