const pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    gulp = require("gulp"),
    notify = require('gulp-notify');

function pugBuild() {
    return gulp
        .src(['./src/pug/**/*.pug', '!./src/pug/**/_*.pug'])
        .pipe(plumber({
                errorHandler: notify.onError('Error: <%= error.message %>')
            })
        )
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest("./dist/"));
}

module.exports = {
    build: pugBuild
};