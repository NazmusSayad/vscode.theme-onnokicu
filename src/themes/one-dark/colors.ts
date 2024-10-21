import Color from 'color'
import { convertToHex } from '../../utils'

const CORE_COLORS = {
  white: Color('#ffffff'),
  light: Color('#abb2bf'),
  dark: Color('#5c6370'),
  gray: Color('#7f848e'),
  grayLight: Color('#989898'),

  orange: Color('#d19a66'),
  yellow: Color('#e5c07b'),

  red: Color('#f44747'),
  softRed: Color('#e06c75'),
  copperRed: Color('#be5046'),

  sky: Color('#56b6c2'),
  blue: Color('#61afef'),

  green: Color('#98c379'),
  violet: Color('#c678dd'),
} as const

const ANSI_COLORS = {
  ansiForeground: CORE_COLORS.light,
  ansiWhite: CORE_COLORS.white.darken(0.2),
  ansiBlack: CORE_COLORS.dark.darken(0.2),
  ansiRed: CORE_COLORS.softRed.saturate(0.25),
  ansiYellow: CORE_COLORS.orange.darken(0.15).desaturate(0.25),
  ansiBlue: CORE_COLORS.blue,
  ansiCyan: CORE_COLORS.sky,
  ansiMagenta: CORE_COLORS.violet,
  ansiGreen: CORE_COLORS.green.saturate(0.1),
} as const

export const BASE_COLORS = {
  ...CORE_COLORS,
  ...ANSI_COLORS,
  ansiWhiteBright: ANSI_COLORS.ansiWhite.lighten(0.25),
  ansiBlackBright: ANSI_COLORS.ansiBlack.lighten(0.35).saturate(0.2),
  ansiRedBright: ANSI_COLORS.ansiRed.lighten(0.15).saturate(0.2),
  ansiYellowBright: ANSI_COLORS.ansiYellow.lighten(0.25).saturate(0.2),
  ansiBlueBright: ANSI_COLORS.ansiBlue.lighten(0.2).saturate(0.25),
  ansiCyanBright: ANSI_COLORS.ansiCyan.lighten(0.25).saturate(0.2),
  ansiMagentaBright: ANSI_COLORS.ansiMagenta.lighten(0.2).saturate(0.2),
  ansiGreenBright: ANSI_COLORS.ansiGreen.lighten(0.25),
} as const

const colors = convertToHex(BASE_COLORS)
export type OneDarkColors = typeof colors & { darkViolet?: string }
export default colors
