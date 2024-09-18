import colors from './colors'
import { Theme } from '../../types'
import uiColors from './ui-colors'
import tokenColors from './token-colors'
import semanticTokenColors from './semantic-token-colors'

export default {
  label: 'OnnoKicu - One Dark',
  uiTheme: 'vs-dark',

  colors: uiColors(),
  tokenColors: tokenColors(colors),

  semanticHighlighting: true,
  semanticTokenColors: semanticTokenColors(colors),
} as Theme.Theme
