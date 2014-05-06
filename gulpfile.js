var gulp = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    ngHtml2Js = require("gulp-ng-html2js"),
    inject = require("gulp-inject"),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload')
    livereloadport = 35729,
    serverport = 5000;

//We only configure the server here and start it only when running the watch task
var server = express();
//Add livereload middleware before static-middleware
server.use(livereload({
  port: livereloadport
}));
server.use(express.static(__dirname + '/build'));    

var base = { base: './src/app/' };

var vendorJS = [
    './src/_vendor/angular/angular.min.js'
];

var appJS = [
    './build/partials/**/*.js',
    './src/app/app.js',
    './src/app/**/*.js',
    '!./src/app/**/*.spec.js'
];

var filesToMove = [
    './src/partials/**/*.*'
];

gulp.task('clean', function(){
  return gulp.src(['./build/*'], {read:false})
  .pipe(clean());
});

// uglify task
gulp.task('js', function() {

    var vendorStream = gulp.src(vendorJS)
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('./build/app'));

    // Concatenate AND minify app sources
    var appStream = gulp.src(appJS)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/app'));

    
    gulp.src('./src/index.html')
        .pipe(inject(gulp.src('./build/app/vendors.js', {read: false, base: './src/app/'}), {starttag: '<!-- inject:vendor:{{ext}} -->', ignorePath: '/build'}))
        .pipe(inject(gulp.src('./build/app/app.js', {read: false, base: './src/app/'}), {starttag: '<!-- inject:app:{{ext}} -->', ignorePath: '/build'}))
        .pipe(gulp.dest('./build'))
        .pipe(refresh(lrserver));
});

// templatify
gulp.task('templatify', function () {
    gulp.src("./src/**/*.tmpl.html")
    .pipe(ngHtml2Js({
        moduleName: "jobney.angular-starter.templates",
        prefix: "/"
    }))
    .pipe(gulp.dest("./build/partials"));
});

gulp.task('move', function () {
    
    gulp.src(filesToMove)
        .pipe(gulp.dest('./build/partials'));
});

gulp.task('serve', function() {
  //Set up your static fileserver, which serves files in the build dir
  server.listen(serverport);
 
  //Set up your livereload server
  lrserver.listen(livereloadport);
});

gulp.task('watch', function () {
    gulp.watch([
            './src/partials/**/*.js',
            './src/app/**/*.js'
    ], base, function () {
        gulp.run('js');
    });
});

gulp.task('default', ['clean', 'move', 'js', 'watch', 'serve']);

gulp.task('build', ['templatify', 'js']);