import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Stack from 'pages/stack'

import stack from 'data/stack'

describe('Stack', () => {
	it('renders a heading', () => {
		render(<Stack />)

		const heading = screen.getByRole('heading', {
			name: /stack/i,
		})

		expect(heading).toBeInTheDocument()
	})

	it('renders a subtitle', () => {
		render(<Stack />)
		const subtitle = screen.getByText(/my favorite tools and software./i)
		expect(subtitle).toBeInTheDocument()
	})

	it('renders the list of stack items', () => {
		render(<Stack />)

		stack.forEach((stackItem) => {
			const stackTitle = screen.getByText(stackItem.name)
			const stackDescription = screen.getByText(stackItem.description)

			expect(stackTitle).toBeInTheDocument()
			expect(stackDescription).toBeInTheDocument()
		})
	})
})
