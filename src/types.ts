export module Theme {
  export type Theme = {
    label: string
    uiTheme: 'vs-dark' | 'vs-light'
    colors: UiColors
    tokenColors: TokenColors
    semanticTokenColors: SemanticColors
    semanticHighlighting: boolean
  }

  export type UiColors = Record<string, string>

  export type SemanticColors = Record<
    string,
    {
      foreground?: string
      background?: string
    }
  >

  export type TokenColors = {
    scope: string | string[]
    settings: {
      foreground?: string
      background?: string
      fontStyle?: string
    }
  }[]
}

export function as<const T extends any>(arg: T) {
  return arg
}
