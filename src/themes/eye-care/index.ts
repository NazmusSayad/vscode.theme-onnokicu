import { Theme } from '../../types'
import { convertToHex } from '../../utils'
import uiColors from '../one-dark/ui-colors'
import { BASE_COLORS } from '../one-dark/colors'
import tokenColors from '../one-dark/token-colors'
import semanticTokenColors from '../one-dark/semantic-token-colors'

const colors = convertToHex({
  ...BASE_COLORS,
  orange: BASE_COLORS.orange.desaturate(0.15).darken(0.1),
  yellow: BASE_COLORS.yellow.desaturate(0.2).darken(0.1),

  softRed: BASE_COLORS.softRed.desaturate(0.15).darken(0.05),
  // softRed: BASE_COLORS.softRed.desaturate(0.15).darken(0.066),

  sky: BASE_COLORS.sky.darken(0.1),
  blue: BASE_COLORS.blue.desaturate(0.25).darken(0.1),

  green: BASE_COLORS.green.desaturate(0.25).darken(0.1),
  violet: BASE_COLORS.violet.desaturate(0.25).darken(0.1),
})

export default {
  label: 'OnnoKicu - Eye Care',
  uiTheme: 'vs-dark',

  colors: uiColors(),
  tokenColors: tokenColors(colors),

  semanticHighlighting: true,
  semanticTokenColors: semanticTokenColors(colors),
} as Theme.Theme
