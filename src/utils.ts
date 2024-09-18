import fs from 'fs'
import path from 'path'

export function cleanDir(...paths: string[]) {
  const dir = path.resolve(...paths)

  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true })
  }

  fs.mkdirSync(dir, { recursive: true })

  return dir
}

export function cleanFile(...paths: string[]) {
  const file = path.resolve(...paths)

  if (fs.existsSync(file)) {
    fs.rmSync(file)
  }

  return file
}
