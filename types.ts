export interface Project {
	title: string
	source?: string
	description: string
	url?: string
	status?: string
}

export interface Post {
	id: string
	title: string
	slug: string
	description: string
	date: string
}

export type ContactIconName = 'email' | 'github' | 'x' | 'linkedin' | 'kofi'
export type StackIconName =
	| 'rust'
	| 'typescript'
	| 'graphql'
	| 'neovim'
	| 'ghostty'
	| 'tmux'
	| 'raycast'

export interface Contact {
	name: string
	link: string
	isExternal: boolean
	icon: ContactIconName
}

export interface Stack {
	name: string
	description: string
	url: string
	icon: StackIconName
}
