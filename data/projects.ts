import type { IProject } from '@/types'

const projects: IProject[] = [
	{
		title: 'Matchbar',
		description: 'The World Cup in your menu bar',
		url: 'https://matchbar-xi.vercel.app',
	},
	{
		title: 'Miru',
		description: 'The social way to pick your next movie - ~500 monthly active users',
		url: 'https://watchmiru.app',
		source: 'https://github.com/lawandothman/miru',
	},
	{
		title: 'uk-police-api',
		description: 'A Rust wrapper for the UK Police API, published on crates.io',
		url: 'https://crates.io/crates/uk-police-api',
		source: 'https://github.com/lawandothman/uk-police-api',
	},
	{
		title: 'lwnd.me',
		description: 'My personal website',
		source: 'https://github.com/lawandothman/lwnd.me',
		url: '#',
	},
	{
		title: 'White Rabbit',
		source: 'https://github.com/pedsm/white-rabbit',
		description: 'Ludum Dare 48 - no checkpoint 2D platformer game',
		url: 'https://pedsm.itch.io/white-rabbit',
	},
]

export default projects
