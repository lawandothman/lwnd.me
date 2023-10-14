'use client'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { match } from 'ts-pattern'

export const ColorModeToggle = () => {
	const [mounted, setMounted] = useState(false)
	const { setTheme, theme } = useTheme()

	useEffect(() => setMounted(true), [])

	const toggleColorMode = () => {
		match(theme)
			.with('dark', () => setTheme('light'))
			.with('light', () => setTheme('dark'))
	}

	const Icon = () =>
		match(theme)
			.with('light', () => <Moon className='h-4 w-4' />)
			.with('dark', () => <Sun className='h-4 w-4' />)
			.otherwise(() => null)

	if (!mounted) return null

	return (
		<Button variant='outline' size='icon' onClick={toggleColorMode}>
			<Icon />
		</Button>
	)
}
