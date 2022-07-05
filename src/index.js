const fs = require("fs")
const path = require("path")
const shell = require("shelljs")
const generatedTheme = require("./generate.js")
const { DESTINATION } = require("./CONFIG.js")

const file = (file) => {
  const name = path.basename(file)
  fs.copyFileSync(file, `${DESTINATION}/${name}`)
  return name
}

const package = {
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
        path: "theme.json",
      },
    ],
  },
}

// If dist file exists then delete else create
if (fs.existsSync(DESTINATION)) {
  fs.rmSync(DESTINATION, { recursive: true })
}
fs.mkdirSync(DESTINATION)

// Write files
fs.writeFileSync(`${DESTINATION}/${package.contributes.themes[0].path}`, JSON.stringify(generatedTheme))
fs.writeFileSync(`${DESTINATION}/package.json`, JSON.stringify(package))
file(`./CHANGELOG.md`)
file(`./LICENSE`)
file(`./README.md`)

// VSIX Package
shell.exec("cd dist& vsce package")

// Move VSIX Files to root
const files = fs.readdirSync(DESTINATION)
files.forEach((file) => {
  if (!file.endsWith(".vsix")) return

  const currentPath = DESTINATION + `/${file}`
  const destinationPath = `./${file}`

  fs.renameSync(currentPath, destinationPath)
})
