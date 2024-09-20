import colors from './themes/one-dark/colors'

export module Theme {
  export type Colors = typeof colors

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
      italic?: boolean
      bold?: boolean
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
