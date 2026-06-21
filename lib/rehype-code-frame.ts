import type { Element, Nodes, Root } from 'hast'

function span(className: string): Element {
	return {
		type: 'element',
		tagName: 'span',
		properties: { className: [className], 'aria-hidden': 'true' },
		children: [],
	}
}

function frame(pre: Element): Element {
	return {
		type: 'element',
		tagName: 'div',
		properties: { className: ['code-frame'] },
		children: [
			{
				type: 'element',
				tagName: 'div',
				properties: { className: ['code-window'] },
				children: [
					span('code-gridlines-h'),
					span('code-gridlines-v'),
					span('code-bracket-left'),
					span('code-bracket-right'),
					pre,
				],
			},
		],
	}
}

function isShikiPre(node: Nodes): node is Element {
	if (node.type !== 'element' || node.tagName !== 'pre') return false
	const cls = node.properties?.className ?? node.properties?.class
	if (Array.isArray(cls)) return cls.includes('shiki')
	if (typeof cls === 'string') return cls.split(' ').includes('shiki')
	return false
}

function walk(node: Root | Element) {
	if (!node.children) return
	node.children = (node.children as Nodes[]).map((child) => {
		if (isShikiPre(child)) return frame(child)
		if ('children' in child && child.children) walk(child)
		return child
	}) as typeof node.children
}

export default function rehypeCodeFrame() {
	return (tree: Root) => walk(tree)
}
