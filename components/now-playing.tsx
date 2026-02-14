'use client'

import { SpotifyIcon } from '@/components/icons'
import { cn } from '@/lib/utils'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function NowPlaying() {
	const { data } = useSWR('/api/now-playing', fetcher)

	return (
		<div className='flex items-center gap-2 text-sm'>
			<SpotifyIcon
				className={cn(
					'size-4',
					data?.songUrl ? 'fill-[#1DB954]' : 'text-muted-foreground fill-current'
				)}
			/>
			{data?.songUrl ? (
				<a
					href={data.songUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='text-muted-foreground hover:text-foreground truncate transition-colors'
				>
					{data.title} — {data.artist}
				</a>
			) : (
				<span className='text-muted-foreground'>Not Playing</span>
			)}
		</div>
	)
}
