import fs from 'fs'
import path from 'path'
import themes from './themes'

const THEME_TO_APPLY = 0
// const THEME_TO_APPLY = 1

const ROOT_DIR = path.resolve(__dirname, '..')
const VSCODE_SETTINGS_JSON = path.resolve(ROOT_DIR, './.vscode/settings.json')

const jsonFile = JSON.parse(fs.readFileSync(VSCODE_SETTINGS_JSON, 'utf8'))
const theme = themes[THEME_TO_APPLY]
console.log('Applying theme:', theme.label)

jsonFile['workbench.colorCustomizations'] = theme.colors
jsonFile['editor.semanticHighlighting.enabled'] = theme.semanticHighlighting

jsonFile['editor.tokenColorCustomizations'] ??= {}
jsonFile['editor.tokenColorCustomizations'].textMateRules = theme.tokenColors

jsonFile['editor.semanticTokenColorCustomizations'] ??= {}
jsonFile['editor.semanticTokenColorCustomizations'].rules =
  theme.semanticTokenColors

fs.writeFileSync(VSCODE_SETTINGS_JSON, JSON.stringify(jsonFile, null, 2))
