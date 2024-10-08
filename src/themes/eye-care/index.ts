import Color from 'color'
import { Theme } from '../../types'
import { convertToHex } from '../../utils'
import uiColors from '../one-dark/ui-colors'
import { BASE_COLORS } from '../one-dark/colors'
import tokenColors from '../one-dark/token-colors'
import semanticTokenColors from '../one-dark/semantic-token-colors'

const colors = convertToHex({
  ...BASE_COLORS,
  orange: BASE_COLORS.orange.darken(0.1).desaturate(0.15),
  yellow: BASE_COLORS.yellow.darken(0.1).desaturate(0.2),
  softRed: BASE_COLORS.softRed.darken(0.05).desaturate(0.15),

  sky: BASE_COLORS.sky.darken(0.1),
  blue: BASE_COLORS.blue.darken(0.1).desaturate(0.25),

  green: BASE_COLORS.green.darken(0.1).desaturate(0.25),
  violet: BASE_COLORS.violet.darken(0.1).desaturate(0.2),
  darkViolet: Color('#8C569E').whiten(0.1),
})

export default {
  label: 'OnnoKicu - Eye Care',
  uiTheme: 'vs-dark',

  colors: uiColors(),
  tokenColors: tokenColors(colors),

  semanticHighlighting: true,
  semanticTokenColors: semanticTokenColors(colors),
} as Theme.Theme
