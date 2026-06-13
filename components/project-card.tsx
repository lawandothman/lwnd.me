import type { IProject } from '@/types'

import { GitHubIcon } from '@/components/icons'
import { ExternalLink } from 'lucide-react'

export function ProjectCard({ project }: { project: IProject }) {
	const hasUrl = project.url && project.url !== '#'
	const primaryHref = hasUrl ? project.url : project.source

	return (
		<div className='border-border/50 flex items-start justify-between gap-4 border-b py-5 last:border-b-0'>
			<div className='min-w-0'>
				<div className='flex items-center gap-2'>
					<a
						href={primaryHref}
						target='_blank'
						rel='noopener noreferrer'
						className='group/title font-display inline-flex items-center gap-1.5 text-lg tracking-tight'
					>
						{project.title}
						<ExternalLink className='text-muted-foreground group-hover/title:text-foreground size-3.5 transition-colors' />
					</a>
					{project.status && (
						<span className='text-muted-foreground bg-muted rounded px-1.5 py-0.5 text-[10px] tracking-wider uppercase'>
							{project.status}
						</span>
					)}
				</div>
				<p className='text-muted-foreground mt-1 text-sm'>{project.description}</p>
			</div>
			{project.source && hasUrl && (
				<a
					href={project.source}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={`View ${project.title} source on GitHub`}
					className='text-muted-foreground hover:text-foreground hover:bg-muted shrink-0 rounded-md p-2 transition-colors'
				>
					<GitHubIcon className='size-4 fill-current' />
				</a>
			)}
		</div>
	)
}
