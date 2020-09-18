// Load plugins
const gulp = require("gulp");

// import tasks
const server = require("./gulp-tasks/browsersync.js");
const js = require("./gulp-tasks/scripts.js");
const css = require("./gulp-tasks/styles.js");
const clean = require("./gulp-tasks/clean.js");
const copy = require("./gulp-tasks/copy.js");
const pug = require("./gulp-tasks/pug.js");

// Watch files
function watchFiles() {
  gulp.watch("./src/assets/scss/**/*", css.build);
  gulp.watch("./src/assets/images/**/*", copy.assets);  //gulp.parallel(img.resize, copy.assets))
  gulp.watch("./src/assets/fonts/**/*", copy.assets);
  gulp.watch("./src/assets/js/**/*", js.build);
  gulp.watch("./src/pug/**/*", pug.build);
}

// define tasks
const watch = gulp.parallel(watchFiles, server.init);
const build = gulp.series(
  clean.dist,
  gulp.parallel(copy.assets, js.build, css.build, pug.build)
);

// expose tasks to CLI
exports.watch = watch;
exports.build = build;
exports.default = build;
