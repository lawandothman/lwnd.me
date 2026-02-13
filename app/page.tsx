export default function Home() {
	return (
		<div className='flex flex-1 flex-col justify-center'>
			<div className='animate-fade-up'>
				<h1 className='font-display text-5xl tracking-tight sm:text-6xl'>Lawand Othman</h1>
			</div>
			<div className='animate-fade-up' style={{ animationDelay: '150ms' }}>
				<p className='text-muted-foreground mt-4'>Software Engineer in London</p>
			</div>
		</div>
	)
}
