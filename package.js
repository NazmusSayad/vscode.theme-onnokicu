module.exports = {
  name: "onnokicu",
  displayName: "OnnoKicu",
  version: "2.3.8",
  publisher: "NazmusSayad",
  description: "",
  engines: {
    vscode: "^1.50.0",
  },
  categories: ["Themes"],
  contributes: {
    themes: [
      {
        label: "OnnoKicu",
        uiTheme: "vs-dark",
        path: "theme",
      },
    ],
  },
}
