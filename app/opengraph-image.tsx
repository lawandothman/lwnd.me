import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Lawand Othman - Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				width: '100%',
				height: '100%',
				backgroundColor: '#1d1b20',
				color: '#e5e0d5',
				padding: '80px',
			}}
		>
			<div
				style={{
					fontSize: 72,
					fontWeight: 400,
					letterSpacing: '-0.02em',
					lineHeight: 1.1,
				}}
			>
				Lawand Othman
			</div>
			<div
				style={{
					fontSize: 28,
					color: '#8a857d',
					marginTop: 20,
				}}
			>
				Software Engineer in London
			</div>
			<div
				style={{
					fontSize: 20,
					color: '#5a5650',
					marginTop: 'auto',
				}}
			>
				lwnd.me
			</div>
		</div>,
		{ ...size }
	)
}
