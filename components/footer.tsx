import { ContactLinks } from '@/components/contact-links'
import { NowPlaying } from '@/components/now-playing'

export function Footer() {
	return (
		<footer className='mx-auto w-full max-w-2xl px-6 pb-8 sm:px-8'>
			<div className='border-border/50 border-t pt-6'>
				<div className='flex items-center justify-between'>
					<NowPlaying />
					<ContactLinks />
				</div>
			</div>
		</footer>
	)
}
