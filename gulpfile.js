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

gulp.task('icons', function() {
    return gulp.src(['src/frontend/images/ipa-keyboard.icns', 'src/frontend/images/ipa-keyboard.ico'])
    .pipe(gulp.dest('www/frontend/images'))
})

gulp.task('compress', function(){
    return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true}) ))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('www'))
});

// Build dist /www
gulp.task('build', function (callback) {
    runSequence('clean:www',
        ['compress', 'images', 'icons', 'styles'],
        callback
    )
})

// Build bin /build
var NwBuilder = require('nw-builder');
gulp.task('nw', function() {

    var nw = new NwBuilder({
        version: '0.12.3',
        files: './src/**',
        macIcns: './src/frontend/images/ipa-keyboard.icns',
        macPlist: {mac_bundle_id: 'ipaKeyboard'},
        // winIco : './src/frontend/images/ipa-keyboard.ico',
        platforms: ['osx64', 'win64', 'linux64']
    });

    return nw.build();
})
