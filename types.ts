export interface IProject {
	title: string
	source?: string
	description: string
	url?: string
	status?: string
}

export type ContactIconName = 'email' | 'github' | 'x' | 'linkedin' | 'kofi'
export type StackIconName = 'rust' | 'typescript' | 'graphql' | 'neovim' | 'ghostty' | 'raycast'

export interface IContact {
	name: string
	link: string
	isExternal: boolean
	icon: ContactIconName
}

export interface IStack {
	name: string
	description: string
	url: string
	icon: StackIconName
}
