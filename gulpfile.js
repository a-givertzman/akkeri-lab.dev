const { src,dest,series,watch,registry } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const image = require('gulp-image')
const fileInclude = require('gulp-file-include')
const uglify = require('gulp-uglify-es').default
const notify = require('gulp-notify')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync').create()

const clean = () => {
  return del(['docs'])
}

const normalise = () => {
  return src('src/css/normalise.css')
    .pipe(
      cleanCss({
        level: 2,
      })
    )
    .pipe(dest('docs/css'))
}

const imagesDev = () => {
  return src(['src/img/**/*.*'])
    .pipe(image())
    .pipe(dest('docs/images'))
}

const styleDev = () => {
  return src('src/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./'))
    .pipe(dest('docs/css'))
    .pipe(browserSync.stream())
}

const scriptsDev = () => {
  return src(['src/js/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('docs/js'))
    .pipe(browserSync.stream())
}

const watchFilesDev = () => {
  browserSync.init({
    server: {
      baseDir: 'docs',
    },
  })
}

const htmlDev = () => {
  return src(['src/**/*.html'])
    .pipe(fileInclude())
    .pipe(dest('docs'))
    .pipe(browserSync.reload({ stream: true }));
}

watch('src/**/*.html', htmlDev);
watch('src/css/**/*.scss',styleDev)
watch('src/js/**/*.js',scriptsDev)


exports.dev = series(
  clean,
  scriptsDev,
  normalise,
  styleDev,
  imagesDev,
  htmlDev,
  watchFilesDev
)

const imagesBuild = () => {
  return src(['src/img/**/*.*'])
    .pipe(image())
    .pipe(dest('docs/images'))
}

const styleBuild = () => {
  return src('src/css/**/*.scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
        overrideBrowserslist: ['last 5 versions'],
      })
    )
    .pipe(
      cleanCss({
        level: 2,
      })
    )
    .pipe(dest('docs/css'))
}
const htmlMinifyBuild = () => {
  return src('docs/**/*.html')
    .pipe(
      htmlMin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest('docs'))
}

const scriptsBuild = () => {
  return src(['src/js/*.js'])
    .pipe(concat('app.js'))
    .pipe(
      uglify({
        toplevel: true,
      }).on('error',notify.onError())
    )
    .pipe(dest('docs/js'))
}

exports.build = series(
  clean,
  scriptsBuild,
  normalise,
  styleBuild,
  imagesBuild,
  htmlDev,
  htmlMinifyBuild
)
