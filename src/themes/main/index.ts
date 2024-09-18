import colors from './ui-colors'
import tokenColors from './token-colors'
import { as, Theme } from '../../types'
import semanticTokenColors from './semantic-token-colors'

export default as<Theme.Theme>({
  label: 'OnnoKicu',
  uiTheme: 'vs-dark',

  colors,
  tokenColors,
  semanticTokenColors,
  semanticHighlighting: true,
})
