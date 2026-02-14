import { ThemeSwitcher } from '@/components/theme-switcher'
import Link from 'next/link'

const navItems = [
	{ title: 'Projects', href: '/projects' },
	{ title: 'Stack', href: '/stack' },
]

export function Navbar() {
	return (
		<nav className='bg-background/80 sticky top-0 z-50 w-full backdrop-blur-xl'>
			<div className='mx-auto flex w-full max-w-2xl items-center justify-between px-6 py-4 sm:px-8'>
				<Link href='/' className='font-display text-lg'>
					lwnd
				</Link>
				<div className='flex items-center gap-7'>
					{navItems.map((item) => (
						<Link
							key={item.title}
							href={item.href}
							className='text-muted-foreground hover:text-foreground text-sm transition-colors'
						>
							{item.title}
						</Link>
					))}
					<ThemeSwitcher />
				</div>
			</div>
		</nav>
	)
}
