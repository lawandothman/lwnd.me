import { Email, GitHub, KoFi, LinkedIn, X } from 'components'

const contact = [
	{
		name: 'Email',
		icon: <Email fill='icon' width='30' height='30' viewBox='0 0 58 58' />,
		link: 'mailto:lwnd@pm.me',
		isExternal: false,
	},
	{
		name: 'GitHub',
		icon: <GitHub fill='icon' width='30' height='30' viewBox='0 0 58 58' />,
		link: 'https://github.com/lawandothman',
		isExternal: true,
	},
	{
		name: 'X',
		icon: <X fill='icon' width='30' height='30' viewBox='0 0 58 58' />,
		link: 'https://x.com/lwndothman',
		isExternal: true,
	},
	{
		name: 'LinkedIn',
		icon: <LinkedIn fill='icon' width='30' height='30' viewBox='0 0 58 58' />,
		link: 'https://www.linkedin.com/in/lawandothman/',
		isExternal: true,
	},
	{
		name: 'Kofi',
		icon: <KoFi fill='icon' width='30' height='30' viewBox='0 0 58 58' />,
		link: 'https://ko-fi.com/lawand',
		isExternal: true,
	},
]

export default contact
