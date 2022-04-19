import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from 'pages'

describe('Home', () => {
	it('renders a heading', () => {
		render(<Home />)

		const heading = screen.getByRole('heading', {
			name: /hey, i'm lawand othman/i,
		})

		expect(heading).toBeInTheDocument()
	})

	it('renders a paragraph', () => {
		render(<Home />)

		const paragraph = screen.getByText(
			/i'm a developer based in london, uk. you've found my personal slice of the internet where i share all the beautiful and fun stuff i'm working on./i
		)

		expect(paragraph).toBeInTheDocument()
	})
})
