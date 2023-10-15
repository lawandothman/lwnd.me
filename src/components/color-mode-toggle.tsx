'use client'

import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { match } from 'ts-pattern'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'

export const ColorModeToggle = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	const toggleColorMode = () => {
		return match(theme)
			.with('light', () => setTheme('dark'))
			.with('dark', () => setTheme('light'))
	}

	const renderIcon = () => {
		return match(theme)
			.with('light', () => <Moon className='h-4 w-4' />)
			.with('dark', () => <Sun className='h-4 w-4' />)
			.otherwise(() => null)
	}

	return mounted ? (
		<Button variant='outline' size='icon' onClick={toggleColorMode}>
			{renderIcon()}
		</Button>
	) : (
		<Button variant='outline' size='icon'>
			<svg className='h-4 w-4' />
		</Button>
	)
}
