import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Projects from 'pages/projects'

import projects from 'data/projects'

describe('Projects', () => {
	it('renders a heading', () => {
		render(<Projects />)

		const heading = screen.getByRole('heading', {
			name: /projects/i,
		})

		expect(heading).toBeInTheDocument()
	})

	it('renders the list of projects', () => {
		render(<Projects />)

		projects.forEach((project) => {
			const projectTitle = screen.getByText(project.title)
			const projectDescription = screen.getByText(project.description)

			if (project.url) {
				const projectLink = screen.getByRole('link', {
					name: project.title,
				})
				expect(projectLink).toBeInTheDocument()
			}

			const viewSourceButtons = screen.getAllByRole('link', {
				name: /view source/i,
			})

			expect(projectDescription).toBeInTheDocument()
			expect(projectTitle).toBeInTheDocument()
			expect(viewSourceButtons).toHaveLength(
				projects.filter((p) => !!p.source).length
			)
		})
	})
})
