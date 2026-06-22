import type { ThemeRegistration } from 'shiki'

const v = (name: string) => `var(--shiki-${name})`

export const vercelTheme: ThemeRegistration = {
	name: 'vercel',
	type: 'dark',
	colors: {
		'editor.foreground': v('foreground'),
		'editor.background': v('background'),
	},
	tokenColors: [
		{
			scope: [
				'keyword.operator.accessor',
				'meta.group.braces.round.function.arguments',
				'meta.template.expression',
				'markup.fenced_code meta.embedded.block',
			],
			settings: { foreground: v('foreground') },
		},
		{ scope: 'emphasis', settings: { fontStyle: 'italic' } },
		{
			scope: ['strong', 'markup.heading.markdown', 'markup.bold.markdown'],
			settings: { fontStyle: 'bold' },
		},
		{ scope: ['markup.italic.markdown'], settings: { fontStyle: 'italic' } },
		{
			scope: 'meta.link.inline.markdown',
			settings: { fontStyle: 'underline', foreground: v('token-link') },
		},
		{
			scope: [
				'string',
				'markup.fenced_code',
				'markup.inline',
				'string.quoted.docstring.multi.python',
			],
			settings: { foreground: v('token-string') },
		},
		{
			scope: [
				'comment',
				'string.quoted.docstring.multi',
				'meta.diff.header.from-file',
				'meta.diff.header.to-file',
			],
			settings: { foreground: v('token-comment') },
		},
		{
			scope: [
				'constant.numeric',
				'constant.language',
				'constant.other.placeholder',
				'constant.character.format.placeholder',
				'variable.language.this',
				'variable.other.object',
				'variable.other.class',
				'variable.other.constant',
				'meta.property-name',
				'meta.property-value',
				'support',
			],
			settings: { foreground: v('token-constant') },
		},
		{
			scope: [
				'keyword',
				'storage.modifier',
				'storage.type',
				'storage.control.clojure',
				'entity.name.function.clojure',
				'entity.name.tag.yaml',
				'support.function.node',
				'support.type.property-name.json',
				'punctuation.separator.key-value',
				'punctuation.definition.template-expression',
			],
			settings: { foreground: v('token-keyword') },
		},
		{ scope: 'variable.parameter.function', settings: { foreground: v('token-parameter') } },
		{
			scope: [
				'support.function',
				'entity.name.type',
				'entity.other.inherited-class',
				'meta.function-call',
				'meta.instance.constructor',
				'entity.other.attribute-name',
				'entity.name.function',
				'constant.keyword.clojure',
			],
			settings: { foreground: v('token-function') },
		},
		{
			scope: [
				'entity.name.tag',
				'string.quoted',
				'string.regexp',
				'string.interpolated',
				'string.template',
				'string.unquoted.plain.out.yaml',
				'keyword.other.template',
			],
			settings: { foreground: v('token-string-expression') },
		},
		{
			scope: [
				'punctuation.definition.arguments',
				'punctuation.definition.dict',
				'punctuation.separator',
				'meta.function-call.arguments',
			],
			settings: { foreground: v('token-punctuation') },
		},
		{
			scope: ['markup.underline.link', 'punctuation.definition.metadata.markdown'],
			settings: { foreground: v('token-link') },
		},
		{
			scope: ['beginning.punctuation.definition.list.markdown'],
			settings: { foreground: v('token-string') },
		},
		{
			scope: [
				'punctuation.definition.string.begin.markdown',
				'punctuation.definition.string.end.markdown',
				'string.other.link.title.markdown',
				'string.other.link.description.markdown',
			],
			settings: { foreground: v('token-keyword') },
		},
		{
			scope: ['constant.numeric.decimal', 'constant.language.boolean', 'meta.var.exp.ts'],
			settings: { foreground: v('token-number') },
		},
		{ scope: ['meta.objectliteral'], settings: { foreground: v('token-object-literal') } },
		{ scope: ['support.variable.property'], settings: { foreground: v('token-property') } },
		{
			scope: ['punctuation.definition.deleted.diff', 'markup.deleted.diff'],
			settings: { foreground: v('token-diff-deleted') },
		},
		{
			scope: ['punctuation.definition.inserted.diff', 'markup.inserted.diff'],
			settings: { foreground: v('token-diff-inserted') },
		},
	],
}
