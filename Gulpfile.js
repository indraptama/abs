// npm install --save-dev gulp gulp-jade gulp-myth browser-sync

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssImport = require('postcss-import');
var cssNext = require('postcss-cssnext');
var csso = require('gulp-csso');
var jade = require('gulp-pug');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Gulp compile css
gulp.task('css', function() {
  return gulp.src('*.css')
    .pipe(postcss([cssImport,cssNext]))
    .pipe(csso())
    .pipe(gulp.dest('app/css/'))
    .pipe(reload({stream:true}));
});

//gulp compile jade
gulp.task('jade', function() {
  return gulp.src('*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('app/'))
    .pipe(reload({stream:true}));
});


//gulp browser sync
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './app/'
        }
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['css', 'jade', 'browser-sync'], function() {
  gulp.watch("src/css/{,*/}*.css", ['css']);
  gulp.watch("*.css",['css']);
  gulp.watch("src/layout/{,*/}*.jade", ['jade']);
  gulp.watch("*.jade", ['jade']);
  gulp.watch("app/*.html", ['bs-reload']);
});
