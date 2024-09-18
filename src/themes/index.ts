import * as fs from 'fs'
import * as path from 'path'
import { Theme } from '../types'

const fsThemes = fs
  .readdirSync(__dirname)
  .filter((target) => fs.statSync(path.join(__dirname, target)).isDirectory())

export default fsThemes.map((theme) => ({
  ...(require('./' + theme).default as Theme.Theme),
  path: theme,
}))
