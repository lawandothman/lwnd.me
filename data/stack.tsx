import { IStack } from 'types'

import { GraphQL, Rust, Typescript } from 'components'

const stack: IStack[] = [
	{
		name: 'TypeScript',
		description: 'JavaScript but with no surprises',
		url: 'https://www.typescriptlang.org/',
		icon: <Typescript viewBox='-20 0 550 550' width='58' height='58' />,
	},
	{
		name: 'Rust',
		description: 'Blazingly fast',
		url: 'https://www.rust-lang.org/',
		icon: <Rust viewBox='3 3 100 100' width='58' height='58' fill='icon' />,
	},
	{
		name: 'GraphQL',
		description: 'Ask for what you need and get exactly that',
		url: 'https://graphql.org/',
		icon: <GraphQL viewBox='0 4 395 395' width='58' height='58' />,
	},
]

export default stack
