import { IStack } from 'types'

import { GraphQL, Kitty, Neovim, Raycast, Rust, Typescript } from 'components'

const stack: IStack[] = [
	{
		name: 'Rust',
		description: 'Blazingly fast',
		url: 'https://www.rust-lang.org/',
		icon: <Rust viewBox='0 0 32 32' width='58' height='58' fill='icon' />,
	},
	{
		name: 'TypeScript',
		description: 'JavaScript but with no surprises',
		url: 'https://www.typescriptlang.org/',
		icon: <Typescript viewBox='-20 0 550 550' width='58' height='58' />,
	},
	{
		name: 'GraphQL',
		description: 'Ask for what you need and get exactly that',
		url: 'https://graphql.org/',
		icon: <GraphQL viewBox='0 4 395 395' width='58' height='58' />,
	},
	{
		name: 'Neovim',
		description: '"I use neovim by the way!"',
		url: 'https://neovim.io/',
		icon: <Neovim viewBox='10 0 602 734' width='58' height='58' />,
	},
	{
		name: 'Kitty',
		description: 'Fast, featureful, GPU based terminal emulator',
		url: 'https://sw.kovidgoyal.net/kitty/',
		icon: <Kitty viewBox='0 0 240 240' width='58' height='58' />,
	},
	{
		name: 'Raycast',
		description: 'My shortcut to everything',
		url: 'https://raycast.com/',
		icon: <Raycast viewBox='0 0 40 40' width='58' height='58' />,
	}
]

export default stack
