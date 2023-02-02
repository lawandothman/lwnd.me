import { IStack } from 'types'

import {
	Chakra,
	Dependabot,
	Figma,
	GraphQL,
	NextJs,
	Notion,
	Rust,
	Typescript,
	VSCode,
	Vercel,
} from 'components'

const stack: IStack[] = [
	{
		name: 'Visual Studio Code',
		description: 'My code editor of choice',
		url: 'https://code.visualstudio.com/',
		icon: <VSCode viewBox='0 0 58 58' width='58' height='58' />,
	},
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
	{
		name: 'Next.js',
		description: 'The best way to build modern React websites',
		url: 'https://nextjs.org/',
		icon: <NextJs viewBox='0 0 58 58' width='58' height='58' fill='icon' />,
	},
	{
		name: 'Figma',
		description: 'My design tool of choice',
		url: 'https://www.figma.com/',
		icon: <Figma viewBox='-10 0 58 58' width='58' height='58' />,
	},
	{
		name: 'Chakra UI',
		description: 'The best React component-based library',
		url: 'https://chakra-ui.com/',
		icon: <Chakra viewBox='0 0 58 58' width='58' height='58' fill='#58c9c7' />,
	},
	{
		name: 'Vercel',
		description:
			'Everything I build on the internet lives on Vercel. It is the gold standard of developer tools',
		url: 'https://vercel.com/',
		icon: <Vercel viewBox='0 0 58 58' width='58' height='58' fill='icon' />,
	},
	{
		name: 'Dependabot',
		description:
			'Dependabot keeps all of my project dependecies up to date every month',
		url: 'https://dependabot.com/',
		icon: <Dependabot viewBox='0 0 58 58' width='58' height='58' />,
	},
	{
		name: 'Notion',
		description:
			'My favourite productivity tool to keep notes and manage my tasks',
		url: 'https://www.notion.so/',
		icon: <Notion viewBox='0 0 58 58' width='58' height='58' fill='icon' />,
	},
]

export default stack
