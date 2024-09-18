export default function (colors: Record<string, string>) {
  return {
    'variable.constant': { foreground: colors.orange },
    'variable.defaultLibrary': { foreground: colors.yellow },

    'variable:dart': { foreground: colors.orange },
    'property:dart': { foreground: colors.orange },
    'annotation:dart': { foreground: colors.orange },
    'parameter.label:dart': { foreground: colors.light },

    enumMember: { foreground: colors.sky },
    macro: { foreground: colors.orange },

    'variable.other.property': { foreground: colors.orange },
  } as const
}
