import fs from 'fs'
import path from 'path'
import themes from './themes'

const THEME_TO_APPLY = 0
// const THEME_TO_APPLY = 1

const ROOT_DIR = path.resolve(__dirname, '..')
const VSCODE_SETTINGS_JSON = path.resolve(ROOT_DIR, './.vscode/settings.json')
const WINDOWS_TERMINAL_SETTINGS_JSON = path.resolve(
  process.env.LOCALAPPDATA!,
  './Microsoft/Windows Terminal/settings.json'
)

const vscodeJsonFile = JSON.parse(fs.readFileSync(VSCODE_SETTINGS_JSON, 'utf8'))
const theme = themes[THEME_TO_APPLY]
console.log('Applying theme:', theme.label)

vscodeJsonFile['workbench.colorCustomizations'] = theme.colors
vscodeJsonFile['editor.semanticHighlighting.enabled'] =
  theme.semanticHighlighting

vscodeJsonFile['editor.tokenColorCustomizations'] ??= {}
vscodeJsonFile['editor.tokenColorCustomizations'].textMateRules =
  theme.tokenColors

vscodeJsonFile['editor.semanticTokenColorCustomizations'] ??= {}
vscodeJsonFile['editor.semanticTokenColorCustomizations'].rules =
  theme.semanticTokenColors

fs.writeFileSync(VSCODE_SETTINGS_JSON, JSON.stringify(vscodeJsonFile, null, 2))

const windowsTerminalJsonFile = JSON.parse(
  fs.readFileSync(WINDOWS_TERMINAL_SETTINGS_JSON, 'utf8')
)

windowsTerminalJsonFile.schemes.forEach((scheme: any) => {
  if (scheme.name !== 'OnnoKicu') return
  scheme.background = theme.colors['terminal.background']
  scheme.foreground = theme.colors['terminal.foreground']
  scheme.white = theme.colors['terminal.ansiWhite']
  scheme.brightWhite = theme.colors['terminal.ansiBrightWhite']
  scheme.black = theme.colors['terminal.ansiBlack']
  scheme.brightBlack = theme.colors['terminal.ansiBrightBlack']
  scheme.blue = theme.colors['terminal.ansiBlue']
  scheme.brightBlue = theme.colors['terminal.ansiBrightBlue']
  scheme.cyan = theme.colors['terminal.ansiCyan']
  scheme.brightCyan = theme.colors['terminal.ansiBrightCyan']
  scheme.green = theme.colors['terminal.ansiGreen']
  scheme.brightGreen = theme.colors['terminal.ansiBrightGreen']
  scheme.purple = theme.colors['terminal.ansiMagenta']
  scheme.brightPurple = theme.colors['terminal.ansiBrightMagenta']
  scheme.red = theme.colors['terminal.ansiRed']
  scheme.brightRed = theme.colors['terminal.ansiBrightRed']
  scheme.yellow = theme.colors['terminal.ansiYellow']
  scheme.brightYellow = theme.colors['terminal.ansiBrightYellow']
})

fs.writeFileSync(
  WINDOWS_TERMINAL_SETTINGS_JSON,
  JSON.stringify(windowsTerminalJsonFile, null, 2)
)
