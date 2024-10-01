import gulp from 'gulp'
const { src, dest, series, watch, registry } = gulp
import concat from 'gulp-concat'
import htmlMin from 'gulp-htmlmin'
import autoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import image from 'gulp-image'
import fileInclude from 'gulp-file-include'
import uglify from 'gulp-uglify'
import notify from 'gulp-notify'

import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)

import sourcemaps from 'gulp-sourcemaps'
import { deleteAsync } from 'del'
import browserSync from 'browser-sync'  //).create()

const clean = () => {
  return deleteAsync(['docs'])
  // return del(['docs'])
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
  return src(['src/img/**/*.*'], { encoding: false })
    .pipe(image())
    .pipe(dest('docs/img'))
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
watch('src/css/**/*.scss', styleDev)
watch('src/js/**/*.js', scriptsDev)


export const dev = series(
  clean,
  scriptsDev,
  normalise,
  styleDev,
  imagesDev,
  htmlDev,
  watchFilesDev
)

const imagesBuild = () => {
  return src(['src/img/**/*.*'], { encoding: false })
    .pipe(image())
    .pipe(dest('docs/img'))
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
      }).on('error', notify.onError())
    )
    .pipe(dest('docs/js'))
}

export const build = series(
  clean,
  scriptsBuild,
  normalise,
  styleBuild,
  imagesBuild,
  htmlDev,
  htmlMinifyBuild
)
