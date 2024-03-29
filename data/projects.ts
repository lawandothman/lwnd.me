import { IProject } from 'types'

const projects: IProject[] = [
	{
		title: 'ミル Miru',
		description: 'Remove the drama from movie night',
		url: 'https://miru.space',
		status: 'ALPHA',
	},
	{
		title: 'Pokédex',
		source: 'https://github.com/lawandothman/pokedex',
		description: "Gotta catch 'em all!",
		url: 'https://pokedex-lwnd.up.railway.app',
	},
	{
		title: 'Litter',
		source: 'https://github.com/lawandothman/litter',
		description: 'A microblogging and social networking service',
		url: 'https://litter-cf67f.web.app/',
	},
	{
		title: 'Shopcart',
		source: 'https://github.com/lawandothman/shopcart',
		description: 'Ecommerce platform with PayPal integration',
	},
	{
		title: 'Fast Feedback',
		source: 'https://github.com/lawandothman/fastfeedback',
		description: 'SaaS to add feedback to static sites',
		url: 'https://fastfeedback-lwnd.vercel.app/',
	},
	{
		title: 'lwnd.me',
		source: 'https://github.com/lawandothman/lwnd.me',
		description: 'My personal website',
		url: '#',
	},
	{
		title: 'Swindler',
		source: 'https://github.com/pedsm/swindler',
		description: 'CovHack2020 2nd Place Winner - a social deception game',
		url: 'https://codename-swindler.herokuapp.com/',
	},
	{
		title: 'White Rabbit',
		source: 'https://github.com/pedsm/white-rabbit',
		description: 'Ludum Dare 48 - no checkpoint 2D platformer game',
		url: 'https://pedsm.itch.io/white-rabbit',
	},
]

export default projects
