var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    css_import = require('postcss-import');

gulp.task("styles", function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([css_import, cssvars, nested, autoprefixer]))
        .on('error', function(error_info){
            console.log(error_info.toString);
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});