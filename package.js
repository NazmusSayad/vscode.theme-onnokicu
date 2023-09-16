module.exports = {
  name: 'onnokicu',
  icon: 'icon.png',
  displayName: 'OnnoKicu',
  version: '2.4.2',
  publisher: 'NazmusSayad',
  description: '',
  engines: {
    vscode: '^1.50.0',
  },
  categories: ['Themes'],
  contributes: {
    themes: [
      {
        label: 'OnnoKicu',
        uiTheme: 'vs-dark',
        path: 'theme',
      },
    ],
  },
  repository: {
    type: 'git',
    url: 'git+github.com:nazmussayad/vscode-theme.onnokicu--.git',
  },
}
