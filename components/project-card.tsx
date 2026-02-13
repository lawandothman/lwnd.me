import type { IProject } from '@/types'

import { ArrowUpRight } from 'lucide-react'

export function ProjectCard({ project }: { project: IProject }) {
	return (
		<div className='group border-b border-border/50 py-5'>
			<div className='flex items-baseline justify-between gap-4'>
				<div className='min-w-0'>
					<div className='flex items-center gap-2'>
						{project.url && project.url !== '#' ? (
							<a
								href={project.url}
								rel='noreferrer'
								target='_blank'
								className='text-foreground hover:text-foreground/70 font-display text-sm transition-colors'
							>
								{project.title}
							</a>
						) : (
							<span className='font-display text-sm'>{project.title}</span>
						)}
						{project.status && (
							<span className='text-muted-foreground bg-muted rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wider'>
								{project.status}
							</span>
						)}
					</div>
					<p className='text-muted-foreground mt-1 text-sm'>{project.description}</p>
				</div>
				{project.source && (
					<a
						href={project.source}
						target='_blank'
						rel='noopener noreferrer'
						aria-label={`View source for ${project.title}`}
						className='text-muted-foreground/0 group-hover:text-muted-foreground shrink-0 transition-all'
					>
						<ArrowUpRight className='size-4' />
					</a>
				)}
			</div>
		</div>
	)
}
