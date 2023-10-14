import { ColorModeToggle } from './color-mode-toggle'

type NavbarItem = {
	title: string
	href: string
}
const navbarItems: NavbarItem[] = [
	{
		title: 'Projects',
		href: '/projects',
	},
	{
		title: 'Stack',
		href: '/stack',
	},
	{
		title: 'Contact',
		href: '/contact',
	},
	{
		title: 'Home',
		href: '/',
	},
]

export const Navbar = () => {
	return (
		<nav className='-ml-[8px] mb-16 tracking-tight'>
			<ColorModeToggle />
		</nav>
	)
}
