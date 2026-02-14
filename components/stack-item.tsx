import type { StackIconName } from '@/types'

import {
	GhosttyIcon,
	GraphQLIcon,
	NeovimIcon,
	RaycastIcon,
	RustIcon,
	TypescriptIcon,
} from '@/components/icons'
import { ArrowUpRight } from 'lucide-react'

const stackIconMap: Record<StackIconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
	rust: RustIcon,
	typescript: TypescriptIcon,
	graphql: GraphQLIcon,
	neovim: NeovimIcon,
	ghostty: GhosttyIcon,
	raycast: RaycastIcon,
}

export function StackItem({
	stack,
}: {
	stack: { name: string; description: string; url: string; icon: StackIconName }
}) {
	const Icon = stackIconMap[stack.icon]
	return (
		<a
			href={stack.url}
			rel='noopener noreferrer'
			target='_blank'
			className='group border-border/50 flex items-center justify-between border-b py-4 transition-colors'
		>
			<div className='flex items-center gap-4'>
				<Icon className='size-8 shrink-0 fill-current' />
				<div>
					<span className='text-sm font-medium'>{stack.name}</span>
					<p className='text-muted-foreground text-sm'>{stack.description}</p>
				</div>
			</div>
			<ArrowUpRight className='text-muted-foreground/0 group-hover:text-muted-foreground size-4 shrink-0 transition-all' />
		</a>
	)
}
