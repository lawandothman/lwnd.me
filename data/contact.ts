import type { IContact } from '@/types'

const contacts: IContact[] = [
	{
		name: 'Email',
		icon: 'email',
		link: 'mailto:lwnd@pm.me',
		isExternal: false,
	},
	{
		name: 'GitHub',
		icon: 'github',
		link: 'https://github.com/lawandothman',
		isExternal: true,
	},
	{
		name: 'X',
		icon: 'x',
		link: 'https://x.com/lwndothman',
		isExternal: true,
	},
	{
		name: 'LinkedIn',
		icon: 'linkedin',
		link: 'https://www.linkedin.com/in/lawandothman/',
		isExternal: true,
	},
	{
		name: 'Ko-fi',
		icon: 'kofi',
		link: 'https://ko-fi.com/lawand',
		isExternal: true,
	},
]

export default contacts
