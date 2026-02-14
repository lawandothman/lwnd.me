import type { IProject } from '@/types'

import { GitHubIcon } from '@/components/icons'
import { ArrowUpRight } from 'lucide-react'

export function ProjectCard({ project }: { project: IProject }) {
	const hasUrl = project.url && project.url !== '#'

	return (
		<div className='border-border/50 border-b py-5'>
			<div className='flex items-start justify-between gap-4'>
				<div className='min-w-0'>
					<div className='flex items-center gap-2'>
						<span className='font-display text-sm'>{project.title}</span>
						{project.status && (
							<span className='text-muted-foreground bg-muted rounded px-1.5 py-0.5 text-[10px] tracking-wider uppercase'>
								{project.status}
							</span>
						)}
					</div>
					<p className='text-muted-foreground mt-1 text-sm'>{project.description}</p>
				</div>
				<div className='mt-0.5 flex shrink-0 items-center gap-1'>
					{hasUrl && (
						<a
							href={project.url}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={`Visit ${project.title}`}
							className='text-muted-foreground hover:text-foreground hover:bg-muted rounded-md p-1.5 transition-colors'
						>
							<ArrowUpRight className='size-4' />
						</a>
					)}
					{project.source && (
						<a
							href={project.source}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={`View source for ${project.title}`}
							className='text-muted-foreground hover:text-foreground hover:bg-muted rounded-md p-1.5 transition-colors'
						>
							<GitHubIcon className='size-3.5 fill-current' />
						</a>
					)}
				</div>
			</div>
		</div>
	)
}
