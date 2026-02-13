import type { Metadata } from 'next'

import { ProjectCard } from '@/components/project-card'
import projects from '@/data/projects'

export const metadata: Metadata = {
	title: 'Projects',
	description: 'A collection of projects built by Lawand Othman.',
	alternates: {
		canonical: '/projects',
	},
}

export default function Projects() {
	return (
		<>
			<div className='animate-fade-up'>
				<h1 className='font-display text-5xl tracking-tight sm:text-6xl'>Projects</h1>
			</div>
			<div className='animate-fade-up' style={{ animationDelay: '100ms' }}>
				<p className='text-muted-foreground mt-4 text-lg'>Things I&apos;ve built.</p>
			</div>
			<div className='animate-fade-up' style={{ animationDelay: '200ms' }}>
				<div className='mt-14'>
					{projects.map((project) => (
						<ProjectCard project={project} key={project.title} />
					))}
				</div>
			</div>
		</>
	)
}
