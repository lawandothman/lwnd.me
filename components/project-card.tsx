import type { IProject } from '@/types'

import { GitHubIcon } from '@/components/icons'
import { ArrowUpRight } from 'lucide-react'

export function ProjectCard({ project }: { project: IProject }) {
	const hasUrl = project.url && project.url !== '#'
	const primaryHref = hasUrl ? project.url : project.source

	return (
		<div className='group relative border-border/50 border-b'>
			<div className='flex items-start justify-between gap-4 py-5'>
				<div className='min-w-0'>
					<div className='flex items-center gap-2'>
						<a
							href={primaryHref}
							target='_blank'
							rel='noopener noreferrer'
							className='font-display text-sm after:absolute after:inset-0'
						>
							{project.title}
						</a>
						{project.status && (
							<span className='text-muted-foreground bg-muted rounded px-1.5 py-0.5 text-[10px] tracking-wider uppercase'>
								{project.status}
							</span>
						)}
					</div>
					<p className='text-muted-foreground mt-1 text-sm'>{project.description}</p>
				</div>
				<div className='relative z-10 mt-0.5 flex shrink-0 items-center gap-1'>
					{project.source && hasUrl && (
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
					<ArrowUpRight className='size-4 text-muted-foreground transition-colors group-hover:text-foreground' />
				</div>
			</div>
		</div>
	)
}
