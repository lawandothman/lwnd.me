'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <div className='size-4' />
	}

	return (
		<button
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			aria-label={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
			className='text-muted-foreground hover:text-foreground transition-colors'
		>
			{theme === 'light' ? <Moon className='size-4' /> : <Sun className='size-4' />}
		</button>
	)
}
