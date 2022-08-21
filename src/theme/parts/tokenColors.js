const color = require('../color.js')

module.exports = [
  {
    scope: 'meta.embedded',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope:
      'punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'variable.other.generic-type.haskell',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'storage.type.haskell',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'support.variable.magic.python',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope:
      'punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'variable.parameter.function.language.special.self.python',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'variable.parameter.function.language.special.cls.python',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'storage.modifier.lifetime.rust',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'support.function.std.rust',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'entity.name.lifetime.rust',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'variable.language.rust',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'support.constant.edge',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'constant.other.character-class.regexp',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ['keyword.operator.word'],
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'keyword.operator.quantifier.regexp',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'variable.parameter.function',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'comment markup.link',
    settings: {
      foreground: color.dark,
    },
  },
  {
    scope: 'markup.changed.diff',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope:
      'meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'markup.inserted.diff',
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: 'markup.deleted.diff',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'meta.function.c,meta.function.cpp',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope:
      'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'punctuation.separator.key-value',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'keyword.operator.expression.import',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'support.constant.math',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'support.constant.property.math',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'variable.other.constant',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: ['storage.type.annotation.java', 'storage.type.object.array.java'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'source.java',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope:
      'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'meta.method.java',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope:
      'storage.modifier.import.java,storage.type.java,storage.type.generic.java',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'keyword.operator.instanceof.java',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'meta.definition.variable.name.java',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'keyword.operator.logical',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'keyword.operator.bitwise',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'keyword.operator.channel',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope:
      'support.constant.property-value.scss,support.constant.property-value.css',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope:
      'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'punctuation.separator.list.comma.css',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'support.constant.color.w3c-standard-color-name.css',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'support.type.vendored.property-name.css',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'support.module.node,support.type.object.module,support.module.node',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'entity.name.type.module',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope:
      'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'support.constant.json',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: [
      'keyword.operator.expression.instanceof',
      'keyword.operator.new',
      'keyword.operator.ternary',
      'keyword.operator.optional',
      'keyword.operator.expression.keyof',
    ],
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'support.type.object.console',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'support.variable.property.process',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'entity.name.function,support.function.console',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'keyword.operator.misc.rust',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'keyword.operator.sigil.rust',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'keyword.operator.delete',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'support.type.object.dom',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'support.variable.dom,support.variable.property.dom',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope:
      'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope:
      'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'punctuation.separator.delimiter',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'punctuation.separator.c,punctuation.separator.cpp',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'support.type.posix-reserved.c,support.type.posix-reserved.cpp',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'keyword.operator.sizeof.c,keyword.operator.sizeof.cpp',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'variable.parameter.function.language.python',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'support.type.python',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'keyword.operator.logical.python',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'variable.parameter.function.python',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope:
      'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'meta.function-call.generic.python',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'constant.character.format.placeholder.other.python',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'keyword.operator',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'keyword.operator.assignment.compound',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope:
      'keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'keyword',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'entity.name.namespace',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'variable',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'variable.c',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'variable.language',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'token.variable.parameter.java',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'import.storage.java',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'token.package.keyword',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'token.package',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: [
      'entity.name.function',
      'meta.require',
      'support.function.any-method',
      'variable.function',
    ],
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'entity.name.type.namespace',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'support.class,entity.name.type.class',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'entity.name.class.identifier.namespace.type',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: [
      'entity.name.class',
      'variable.other.class.js',
      'variable.other.class.ts',
    ],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'variable.other.class.php',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'entity.name.type',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'keyword.control',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'control.elements,keyword.operator.less',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'keyword.other.special-method',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'storage',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'token.storage',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope:
      'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'token.storage.type.java',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'support.function',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'support.type.property-name',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'support.constant.property-value',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'support.constant.font-name',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'meta.tag',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'string',
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: 'constant.other.symbol',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'constant.numeric',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'constant',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'punctuation.definition.constant',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'entity.name.tag',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'meta.selector',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'markup.heading',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'markup.heading punctuation.definition.heading,entity.name.section',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'keyword.other.unit',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'markup.bold,todo.bold',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'punctuation.definition.bold',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'markup.italic,punctuation.definition.italic,todo.emphasis',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'emphasis md',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'entity.name.section.markdown',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'punctuation.definition.heading.markdown',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'punctuation.definition.list.begin.markdown',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'markup.heading.setext',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'punctuation.definition.bold.markdown',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'markup.inline.raw.markdown',
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: 'markup.inline.raw.string.markdown',
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: 'punctuation.definition.raw.markdown',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'punctuation.definition.list.markdown',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: [
      'punctuation.definition.string.begin.markdown',
      'punctuation.definition.string.end.markdown',
      'punctuation.definition.metadata.markdown',
    ],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ['beginning.punctuation.definition.list.markdown'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'punctuation.definition.metadata.markdown',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope:
      'markup.underline.link.markdown,markup.underline.link.image.markdown',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope:
      'string.other.link.title.markdown,string.other.link.description.markdown',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'markup.raw.monospace.asciidoc',
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: 'punctuation.definition.asciidoc',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'markup.list.asciidoc',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'markup.link.asciidoc,markup.other.url.asciidoc',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'string.unquoted.asciidoc,markup.other.url.asciidoc',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'string.regexp',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'punctuation.section.embedded,variable.interpolation',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope:
      'punctuation.section.embedded.begin,punctuation.section.embedded.end',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'invalid.illegal',
    settings: {
      foreground: color.white,
    },
  },
  {
    scope: 'invalid.illegal.bad-ampersand.html',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'invalid.illegal.unrecognized-tag.html',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'invalid.broken',
    settings: {
      foreground: color.white,
    },
  },
  {
    scope: 'invalid.deprecated',
    settings: {
      foreground: color.white,
    },
  },
  {
    scope: 'invalid.deprecated.entity.other.attribute-name.html',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'invalid.unimplemented',
    settings: {
      foreground: color.white,
    },
  },
  {
    scope: 'source.json meta.structure.dictionary.json>string.quoted.json',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope:
      'source.json meta.structure.dictionary.json>string.quoted.json>punctuation.string',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope:
      'source.json meta.structure.dictionary.json>value.json>string.quoted.json,source.json meta.structure.array.json>value.json>string.quoted.json,source.json meta.structure.dictionary.json>value.json>string.quoted.json>punctuation,source.json meta.structure.array.json>value.json>string.quoted.json>punctuation',
    settings: {
      foreground: color.green,
    },
  },
  {
    scope:
      'source.json meta.structure.dictionary.json>constant.language.json,source.json meta.structure.array.json>constant.language.json',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'support.type.property-name.json',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'support.type.property-name.json punctuation',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope:
      'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope:
      'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope:
      'support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'keyword.operator.error-control.php',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'keyword.operator.type.php',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'punctuation.section.array.begin.php',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'punctuation.section.array.end.php',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'invalid.illegal.non-null-typehinted.php',
    settings: {
      foreground: color.red,
    },
  },
  {
    scope:
      'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope:
      'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope:
      'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'support.constant.core.rust',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope:
      'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'entity.name.goto-label.php,support.other.php',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope:
      'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'keyword.operator.regexp.php',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'keyword.operator.comparison.php',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'meta.function.decorator.python',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope:
      'support.token.decorator.python,meta.function.decorator.identifier.python',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'function.parameter',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'function.brace',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'function.parameter.ruby,function.parameter.cs',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'constant.language.symbol.ruby',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'rgb-value',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: 'inline-color-decoration rgb-value',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'less rgb-value',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'selector.sass',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope:
      'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'block.scope.end,block.scope.begin',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'storage.type.cs',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'entity.name.variable.local.cs',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'token.info-token',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'token.warn-token',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: 'token.error-token',
    settings: {
      foreground: color.red,
    },
  },
  {
    scope: 'token.debug-token',
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: [
      'punctuation.definition.template-expression.begin',
      'punctuation.definition.template-expression.end',
      'punctuation.section.embedded',
    ],
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: ['meta.template.expression'],
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: ['keyword.operator.module'],
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: ['support.type.type.flowtype'],
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: ['support.type.primitive'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: ['meta.property.object'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ['variable.parameter.function.js'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ['keyword.other.template.begin'],
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: ['keyword.other.template.end'],
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: ['keyword.other.substitution.begin'],
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: ['keyword.other.substitution.end'],
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: ['keyword.operator.assignment'],
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: ['keyword.operator.assignment.go'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: ['keyword.operator.arithmetic.go', 'keyword.operator.address.go'],
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: ['entity.name.package.go'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: ['support.type.prelude.elm'],
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: ['support.constant.elm'],
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: ['punctuation.quasi.element'],
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: ['constant.character.entity'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: [
      'entity.other.attribute-name.pseudo-element',
      'entity.other.attribute-name.pseudo-class',
    ],
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: ['entity.global.clojure'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: ['meta.symbol.clojure'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ['constant.keyword.clojure'],
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ['source.ini'],
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: ['meta.scope.prerequisites.makefile'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ['source.makefile'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: ['storage.modifier.import.groovy'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: ['meta.method.groovy'],
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: ['meta.definition.variable.name.groovy'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ['meta.definition.class.inherited.classes.groovy'],
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: ['support.variable.semantic.hlsl'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: [
      'support.type.texture.hlsl',
      'support.type.sampler.hlsl',
      'support.type.object.hlsl',
      'support.type.object.rw.hlsl',
      'support.type.fx.hlsl',
      'support.type.object.hlsl',
    ],
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: ['text.variable', 'text.bracketed'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ['support.type.swift', 'support.type.vb.asp'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: ['entity.name.function.xi'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: ['entity.name.class.xi'],
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: ['constant.character.character-class.regexp.xi'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ['constant.regexp.xi'],
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: ['keyword.control.xi'],
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: ['invalid.xi'],
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: ['beginning.punctuation.definition.quote.markdown.xi'],
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: ['beginning.punctuation.definition.list.markdown.xi'],
    settings: {
      foreground: color.gray,
    },
  },
  {
    scope: ['constant.character.xi'],
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: ['accent.xi'],
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: ['wikiword.xi'],
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: ['constant.other.color.rgb-value.xi'],
    settings: {
      foreground: color.white,
    },
  },
  {
    scope: ['punctuation.definition.tag.xi'],
    settings: {
      foreground: color.dark,
    },
  },
  {
    scope: [
      'entity.name.label.cs',
      'entity.name.scope-resolution.function.call',
      'entity.name.scope-resolution.function.definition',
    ],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: [
      'entity.name.label.cs',
      'markup.heading.setext.1.markdown',
      'markup.heading.setext.2.markdown',
    ],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ['meta.brace.square'],
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: 'markup.quote.markdown',
    settings: {
      foreground: color.dark,
    },
  },
  {
    scope: 'punctuation.definition.block.sequence.item.yaml',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: [
      'constant.language.symbol.elixir',
      'constant.language.symbol.double-quoted.elixir',
    ],
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: ['entity.name.variable.parameter.cs'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: ['entity.name.variable.field.cs'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'markup.deleted',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'markup.inserted',
    settings: {
      foreground: color.green,
    },
  },
  {
    scope: 'markup.underline',
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    scope: [
      'punctuation.section.embedded.begin.php',
      'punctuation.section.embedded.end.php',
    ],
    settings: {
      foreground: color.darkOrange,
    },
  },
  {
    scope: ['support.other.namespace.php'],
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: ['variable.other.object'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: ['variable.other.constant.property'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ['entity.other.inherited-class'],
    settings: {
      foreground: color.yellow,
    },
  },
  {
    scope: 'variable.other.readwrite.c',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope:
      'entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php',
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: ['constant.numeric.decimal.asm.x86_64'],
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: ['support.other.parenthesis.regexp'],
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope: ['constant.character.escape'],
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: ['string.regexp'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'variable.language.this',
    settings: {
      foreground: color.orange2,
    },
  },
  {
    scope:
      'entity.other.attribute-name.id,entity.other.attribute-name.class.css',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'punctuation.definition.string',
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope:
      'punctuation.definition.tag.end.html,punctuation.definition.tag.begin.html',
    settings: {
      foreground: color.grayLight,
    },
  },
  {
    scope: 'comment',
    settings: {
      foreground: color.gray,
      fontStyle: 'italic',
    },
  },
  {
    scope: 'punctuation.definition.comment',
    settings: {
      foreground: color.gray + '60',
    },
  },
  {
    scope: [
      'keyword.control.at-rule.charset.css',
      'keyword.control.at-rule.import.css',
      'keyword.control.at-rule.font-face.css',
      'keyword.control.at-rule.page.css',
      'keyword.control.at-rule.media.css',
      'keyword.operator.logical.only.media.css',
      'keyword.operator.logical.and.media.css',
      'support.constant.media.css',
      'keyword.control.at-rule.counter-style.css',
      'keyword.control.at-rule.document.css',
      'keyword.control.at-rule.supports.css',
      'keyword.control.at-rule.viewport.css',
      'keyword.control.at-rule.font-feature-values.css',
      'keyword.control.at-rule.styleset.css',
      'keyword.control.at-rule.namespace.css',
      'keyword.control.at-rule.css',
      'keyword.control.at-rule.css',
      'keyword.control.at-rule.keyframes.css',
      'entity.other.keyframe-offset.css',
      'entity.other.keyframe-offset.percentage.css',

      'keyword.control.at-rule.charset.scss',
      'keyword.control.content.scss',
      'keyword.control.each.scss',
      'keyword.control.operator',
      'keyword.control.else.scss',
      'keyword.control.at-rule.extend.scss',
      'keyword.control.at-rule.fontface.scss',
      'keyword.control.for.scss',
      'keyword.control.at-rule.forward.scss',
      'keyword.control.at-rule.function.scss',
      'keyword.control.if.scss',
      'keyword.control.at-rule.import.scss',
      'keyword.control.at-rule.include.scss',
      'keyword.control.at-rule.keyframes.scss',
      'keyword.operator.logical.scss',
      'keyword.control.operator.css.scss',
      'keyword.control.at-rule.mixin.scss',
      'keyword.control.at-rule.namespace.scss',
      'keyword.control.at-rule.page.scss',
      'keyword.control.return.scss',
      'keyword.control.at-rule.at-root.scss',
      'keyword.control.at-rule.supports.scss',
      'keyword.control.at-rule.use.scss',
      'keyword.control.warn.scss',
      'keyword.control.while.scss',

      'support.type.object.module.js',
      'keyword.control.export.js',
      'keyword.control.default.js',
    ],
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    scope: [
      'support.type.object.module.js',
      'keyword.control.export.js',
      'keyword.control.default.js',
    ],
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: 'punctuation.definition.comment',
    settings: {
      fontStyle: '',
    },
  },
  {
    scope: 'variable.language.super.js,variable.language.super.ts',
    settings: {
      foreground: color.violet,
    },
  },
]
