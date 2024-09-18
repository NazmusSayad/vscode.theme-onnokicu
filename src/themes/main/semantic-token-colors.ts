import colors from './colors'
import { as, Theme } from '../../types'

export default as<Theme.SemanticColors>({
  enumMember: {
    foreground: colors.sky,
  },
  'variable.constant': {
    foreground: colors.orange2,
  },
  'variable.defaultLibrary': {
    foreground: colors.yellow,
  },
  'variable:dart': {
    foreground: colors.orange2,
  },
  'property:dart': {
    foreground: colors.orange2,
  },
  'annotation:dart': {
    foreground: colors.orange2,
  },
  'parameter.label:dart': {
    foreground: colors.light,
  },
  macro: {
    foreground: colors.orange2,
  },
})
