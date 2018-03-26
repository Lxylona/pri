import babelEnv from "@babel/preset-env"
import stage2 from "@babel/preset-stage-2"
import * as fs from "fs-extra"
import * as gulp from "gulp"
import * as gulpBabel from "gulp-babel"
import * as ts from "gulp-typescript"
import * as _ from "lodash"
import * as path from "path"
import { builtDir } from "./static"

function runTs(projectRootPath: string, outDir: string) {
  const tsConfigPath = path.join(projectRootPath, "tsconfig.json")
  const hasTsConfig = fs.existsSync(tsConfigPath)
  const tsConfig = fs.readJsonSync(tsConfigPath)

  const compilerOptions = hasTsConfig ? _.get(tsConfig, "compilerOptions") : null

  return new Promise((resolve, reject) => {
    gulp
      .src([path.join(projectRootPath, "src/**/*.{tsx,ts}")])
      .pipe(ts(compilerOptions))
      .pipe(gulp.dest(path.join(projectRootPath, outDir)))
      .on("end", resolve)
      .on("error", reject)
  })
}

function runBabel(sourcePath: string) {
  return new Promise((resolve, reject) => {
    gulp
      .src(path.join(sourcePath, "**/*.js"))
      .pipe(gulpBabel({ presets: [[babelEnv]] }))
      .pipe(gulp.dest(sourcePath))
      .on("end", resolve)
      .on("error", reject)
  })
}

export const pluginBuild = async (projectRootPath: string) => {
  await runTs(projectRootPath, builtDir)
  await runBabel(path.join(projectRootPath, builtDir))
}