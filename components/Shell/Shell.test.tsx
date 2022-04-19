import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Shell } from 'components'

describe('Shell', () => {
	it('renders a navbar', () => {
		render(<Shell />)

		const navigation = screen.getByRole('navigation')
		screen.debug()
		expect(navigation).toBeInTheDocument()
	})

	it('renders a child element', () => {
		render(<Shell>Hello World</Shell>)

		const child = screen.getByText('Hello World')
		expect(child).toBeInTheDocument()
	})

	it('renders a footer', () => {
		render(<Shell />)

		const footer = screen.getByRole('contentinfo')
		expect(footer).toBeInTheDocument()
	})
})
