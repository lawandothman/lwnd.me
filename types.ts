export interface IProject {
	title: string
	source?: string
	description: string
	url?: string
	inProgress?: boolean
}

export interface IStack {
	name: string
	description: string
	url: string
	icon: React.ReactNode
}
