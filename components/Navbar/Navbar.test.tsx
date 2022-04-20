import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Navbar } from 'components'

describe('Navbar', () => {
	it('renders', () => {
		render(<Navbar />)
		const nav = screen.getByRole('navigation')
		expect(nav).toBeInTheDocument()
	})

	it('renders a list of navbar items', () => {
		render(<Navbar />)
		const navItems = screen.getAllByRole('link')
		expect(navItems).toHaveLength(4)
	})
})
