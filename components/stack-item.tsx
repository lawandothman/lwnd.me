import type { StackIconName } from '@/types'

import {
	GhosttyIcon,
	GraphQLIcon,
	NeovimIcon,
	RaycastIcon,
	RustIcon,
	TmuxIcon,
	TypescriptIcon,
} from '@/components/icons'

const stackIconMap: Record<StackIconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
	rust: RustIcon,
	typescript: TypescriptIcon,
	graphql: GraphQLIcon,
	neovim: NeovimIcon,
	ghostty: GhosttyIcon,
	tmux: TmuxIcon,
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
			className='hover:bg-foreground/5 -mx-4 flex items-center gap-4 rounded-xl px-4 py-4 transition-colors'
		>
			<Icon className='size-8 shrink-0 fill-current' />
			<div>
				<span className='font-display text-lg tracking-tight'>{stack.name}</span>
				<p className='text-muted-foreground text-sm'>{stack.description}</p>
			</div>
		</a>
	)
}
