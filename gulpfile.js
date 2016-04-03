var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('clean:www', function() {
    return del.sync('www');
})

gulp.task('styles', function(){
    return gulp.src('src/frontend/styles/app.css')
    .pipe(gulp.dest('www/frontend/styles'))
});

gulp.task('fonts', function() {
    return gulp.src('src/frontend/fonts/**/*')
    .pipe(gulp.dest('www/frontend/fonts'))
})

gulp.task('images', function(){
    return gulp.src('src/frontend/images/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('www/frontend/images'))
});

gulp.task('compress', function(){
    return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true}) ))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('www'))
});

// Build
gulp.task('build', function (callback) {
    runSequence('clean:www',
        ['compress', 'images', 'styles'],
        callback
    )
})
