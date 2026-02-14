import type { IProject } from '@/types'

const projects: IProject[] = [
	{
		title: 'Miru',
		description: 'The social way to pick your next movie',
		url: 'https://miru-chi.vercel.app',
		source: 'https://github.com/lawandothman/miru',
	},
	{
		title: 'Pokédex',
		description: "Gotta catch 'em all!",
		source: 'https://github.com/lawandothman/pokedex',
	},
	{
		title: 'Litter',
		description: 'A microblogging and social networking service',
		source: 'https://github.com/lawandothman/litter',
	},
	{
		title: 'Shopcart',
		description: 'Ecommerce platform with PayPal integration',
		source: 'https://github.com/lawandothman/shopcart',
	},
	{
		title: 'Fast Feedback',
		description: 'SaaS to add feedback to static sites',
		source: 'https://github.com/lawandothman/fastfeedback',
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
