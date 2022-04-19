import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Contact from 'pages/contact'

import contact from 'data/contact'

describe('Contact', () => {
	it('renders a heading', () => {
		render(<Contact />)

		const heading = screen.getByRole('heading', {
			name: /contact me/i,
		})

		expect(heading).toBeInTheDocument()
	})

	it('renders a list of contact buttons', () => {
		render(<Contact />)
		contact.forEach((contactItem) => {
			const button = screen.getByRole('link', {
				name: contactItem.name,
			})

			expect(button).toBeInTheDocument()
		})
	})
})
