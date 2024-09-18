import fs from 'fs'
import path from 'path'
import themes from './themes'
import { sync } from 'cross-spawn'
import packageJson from './packageJson'
import { cleanDir, cleanFile } from './utils'

const ROOT_DIR = path.resolve(__dirname, '..')
const EXTENSION_DIR = path.resolve(__dirname, '../extension')
const EXTENSION_THEME_DIR = cleanDir(EXTENSION_DIR, './themes')
const EXTENSION_PACKAGE_JSON = cleanFile(EXTENSION_DIR, './package.json')
const EXTENSION_OUT_FILE = path.join(
  ROOT_DIR,
  packageJson.name + '@' + packageJson.version + '.vsix'
)

const extPackageJson = { ...packageJson }
extPackageJson.contributes.themes = themes.map(
  ({ label, uiTheme, path: themePath, ...theme }) => {
    fs.writeFileSync(
      path.resolve(EXTENSION_THEME_DIR, `${themePath}.json`),
      JSON.stringify(theme)
    )

    return {
      label,
      uiTheme,
      path: `themes/${themePath}.json`,
    }
  }
)

fs.writeFileSync(EXTENSION_PACKAGE_JSON, JSON.stringify(extPackageJson))

sync(
  'npx',
  ['vsce', 'package', '--out', path.relative(__dirname, EXTENSION_OUT_FILE)],
  {
    cwd: EXTENSION_DIR,
    stdio: 'inherit',
  }
)
