import Color from 'color'
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


export function convertToHex<T extends Record<string, Color>>(arg: T) {
  const result = {} as Record<string, string>
  for (const key in arg) {
    result[key] = arg[key].hex()
  }

  return result as {
    [K in keyof T]: string
  }
}
