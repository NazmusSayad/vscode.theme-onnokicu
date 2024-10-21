// @ts-nocheck

import color from 'ansi-colors'
const colorNames = [
  'white',
  'black',
  'red',
  'yellow',
  'blue',
  'cyan',
  'magenta',
  'green',
]

console.log('')
console.log(
  ('Normal' + ':').padEnd(15),
  color.bold('Bold'),
  color.dim('Dim'),
  color.italic('Italic'),
  color.inverse('Inverse'),
  color.underline('Underline'),
  color.strikethrough('Strike')
)

console.log('')

colorNames.forEach((name) => {
  console.log(
    color[name]((name + ':').padEnd(15)),
    color[name].bold('Bold'),
    color[name].dim('Dim'),
    color[name].italic('Italic'),
    color[name].inverse('Inverse'),
    color[name].underline('Underline'),
    color[name].strikethrough('Strike')
  )

  name = name + 'Bright'
  console.log(
    color[name]((name + ':').padEnd(15)),
    color[name].bold('Bold'),
    color[name].dim('Dim'),
    color[name].italic('Italic'),
    color[name].inverse('Inverse'),
    color[name].underline('Underline'),
    color[name].strikethrough('Strike')
  )

  console.log('')
})
