const fs = require("fs")
const SHELL = require("shelljs")
const package = require("../package.js")

const themes = package.contributes.themes

// Delete Old themes
if (fs.existsSync("themes")) {
  fs.rmSync("themes", { recursive: true })
}
fs.mkdirSync("themes")

// Loop over giver package themes and create theme.json
themes.forEach((config) => {
  const theme = require(`./${config.path}`)
  config.path = `themes/${config.path}.json`

  fs.writeFileSync(config.path, JSON.stringify(theme))
})

console.log(": Compile done!")

// Play with package.json
fs.renameSync("package.json", "package-temp.json")

fs.writeFileSync("package.json", JSON.stringify(package))
SHELL.exec("npx vsce package")

fs.renameSync("package-temp.json", "package.json")
