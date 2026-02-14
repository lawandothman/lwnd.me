import type { Metadata } from 'next'

import { StackItem } from '@/components/stack-item'
import stack from '@/data/stack'

export const metadata: Metadata = {
	title: 'Stack',
	description: 'Tools and software Lawand Othman uses daily.',
	alternates: {
		canonical: '/stack',
	},
}

export default function Stack() {
	return (
		<>
			<div className='animate-fade-up'>
				<h1 className='font-display text-5xl tracking-tight sm:text-6xl'>Stack</h1>
			</div>
			<div className='animate-fade-up' style={{ animationDelay: '100ms' }}>
				<p className='text-muted-foreground mt-4 text-lg'>Tools and software I use daily.</p>
			</div>
			<div className='animate-fade-up' style={{ animationDelay: '200ms' }}>
				<div className='mt-14'>
					{stack.map((item) => (
						<StackItem stack={item} key={item.name} />
					))}
				</div>
			</div>
		</>
	)
}
