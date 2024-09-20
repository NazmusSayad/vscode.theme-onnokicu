import {} from 'fs'
import * as fs from 'fs'
const fsr = require('fs')

let anything = 'anything'
const something = 'something'

function doSomething() {
  console.log('doing something')
  console.log(anything)
  anything = 'another thing'
  fetch('https://api.example.com/' + something)
    .then((res) => res.json())
    .then((data) => console.log(data))
}

export const get = (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}

export function getFn(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

exports.get = function (req, res) {
  res.status(200).json({ name: 'John Doe' })
}

process

module.exports = function (req, res) {
  fs.readFile('demo/javascript.js', 'utf8', function (err, data) {
    if (err) {
      res.status(500).json({ error: err })
    } else {
      res.status(200).json({ data })
    }
  })

  return res.status(200).json({ name: 'John Doe' })
}

class Name extends String {
  constructor() {
    super()
    this.getName
  }

  static getName() {
    async function setName() {
      const data = await fetch('https://api.example.com/')
    }
  }

  private getName() {}
  protected getName2() {}
  public getName3() {}
}

const abc = 'str' as any
