import Link from 'next/link'

export default function NotFound() {
	return (
		<>
			<div className='animate-fade-up'>
				<h1 className='font-display text-5xl tracking-tight sm:text-6xl'>404</h1>
			</div>
			<div className='animate-fade-up' style={{ animationDelay: '100ms' }}>
				<p className='text-muted-foreground mt-4 text-lg'>This page doesn&apos;t exist.</p>
			</div>
			<div className='animate-fade-up' style={{ animationDelay: '200ms' }}>
				<Link
					href='/'
					className='text-muted-foreground hover:text-foreground mt-10 inline-block text-sm transition-colors'
				>
					&larr; Back home
				</Link>
			</div>
		</>
	)
}
