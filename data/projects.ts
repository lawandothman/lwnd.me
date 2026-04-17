import type { IProject } from '@/types'

const projects: IProject[] = [
	{
		title: 'Miru',
		description: 'The social way to pick your next movie',
		url: 'https://watchmiru.app',
		source: 'https://github.com/lawandothman/miru',
	},
	{
		title: 'lwnd.me',
		description: 'My personal website',
		source: 'https://github.com/lawandothman/lwnd.me',
		url: '#',
	},
	{
		title: 'Swindler',
		description: 'CovHack2020 2nd Place Winner - a social deception game',
		source: 'https://github.com/pedsm/swindler',
	},
	{
		title: 'White Rabbit',
		source: 'https://github.com/pedsm/white-rabbit',
		description: 'Ludum Dare 48 - no checkpoint 2D platformer game',
		url: 'https://pedsm.itch.io/white-rabbit',
	},
]

export default projects
