import type { ContactIconName } from '@/types'

import { EmailIcon, GitHubIcon, KoFiIcon, LinkedInIcon, XIcon } from '@/components/icons'
import contacts from '@/data/contact'

const iconMap: Record<ContactIconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
	email: EmailIcon,
	github: GitHubIcon,
	x: XIcon,
	linkedin: LinkedInIcon,
	kofi: KoFiIcon,
}

export function ContactLinks() {
	return (
		<div className='flex items-center gap-5'>
			{contacts.map((contact) => {
				const Icon = iconMap[contact.icon]
				return (
					<a
						key={contact.name}
						href={contact.link}
						target={contact.isExternal ? '_blank' : '_self'}
						rel={contact.isExternal ? 'noopener noreferrer' : undefined}
						aria-label={contact.name}
						className='text-muted-foreground hover:text-foreground transition-colors'
					>
						<Icon className='size-4 fill-current' />
					</a>
				)
			})}
		</div>
	)
}
