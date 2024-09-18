export default {
  name: 'onnokicu',
  version: '2.4.4',

  icon: 'icon.png',
  displayName: 'OnnoKicu',
  publisher: 'NazmusSayad',

  description:
    'A dark theme for Visual Studio Code inspired by the Atom One Dark theme.',

  engines: {
    vscode: '^1.50.0',
  },

  categories: ['Themes'],
  contributes: {
    themes: [] as {
      label: string
      uiTheme: string
      path: string
    }[],
  },
  repository: {
    type: 'git',
    url: 'git+github.com:nazmussayad/vscode-theme.onnokicu--.git',
  },
}
