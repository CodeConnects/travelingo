var gulp = require("gulp"),
    watch = require("gulp-watch");

gulp.task("default", function() {
    console.log("Yeahhhh boyyyy, nice Gulp task!!!");
});

gulp.task("html", function() {
    console.log("Here is some awesome automated html thingy");
});

gulp.task("styles", function() {
    console.log("automated Sass or PostCSS task here");
});

gulp.task("watch", function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});

console.log("But we do see this one outside of gulp task");
