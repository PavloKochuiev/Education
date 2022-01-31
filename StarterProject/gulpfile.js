const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const csso = require('gulp-csso')
const server = require('browser-sync').create();

gulp.task("clean", () => {
  return del("build");
})

gulp.task("html",  () => {
    return gulp.src('./src/index.html')
      .pipe(gulp.dest('build'))
      .pipe(server.stream())
})

gulp.task ("style",  () => {
    return gulp.src('./src/styles/**/*.scss')
      .pipe(sass())
      .pipe(csso())
      .pipe(gulp.dest('./build/styles'))
      .pipe(server.stream())
})

gulp.task("js", () => {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(gulp.dest('build/scripts'))
    .pipe(server.stream())
})

gulp.task("copy-assets", function () {
  return gulp.src([
    "src/assets/fonts/**/*",
    "src/assets/images/**",
  ],{
    base: "src"
  })
    .pipe(gulp.dest('build'));
})

gulp.task("server-watch", () => {
  server.init({
    server: "build/",
    notify: false,
    open: true, 
    cors: true,
    ui: false
  });

  gulp.watch('src/**/*.scss', gulp.task('style'))
  gulp.watch('src/**/*.html', gulp.task('html'))
  gulp.watch('src/**/*.js', gulp.task('js'))
});

gulp.task("start", gulp.series('clean', 'html', 'style', 'js', 'copy-assets', 'server-watch'))





// rm -rf node modules - удалить node modules 
// i - установить модуль 
// start - запустить
// npm install - установить все пакеты необходимые для проекта