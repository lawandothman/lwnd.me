import { markdownToHtml } from '@/lib/markdown'
import type { Post } from '@/types'
import { Client } from '@notionhq/client'
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionToMarkdown } from 'notion-to-md'

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const n2m = new NotionToMarkdown({ notionClient: notion })

const databaseId = process.env.NOTION_DATABASE_ID as string

const PROPERTY = {
	slug: 'Slug',
	published: 'Published',
	date: 'Date',
	description: 'Description',
} as const

function isPage(result: unknown): result is PageObjectResponse {
	return typeof result === 'object' && result !== null && 'properties' in result
}

function plainText(property: PageObjectResponse['properties'][string] | undefined): string {
	if (!property) return ''
	if (property.type === 'title') return property.title.map((t) => t.plain_text).join('')
	if (property.type === 'rich_text') return property.rich_text.map((t) => t.plain_text).join('')
	return ''
}

function toPost(page: PageObjectResponse): Post {
	const props = page.properties
	const dateProp = props[PROPERTY.date]

	return {
		id: page.id,
		title: plainText(props.Name ?? props.Title),
		slug: plainText(props[PROPERTY.slug]),
		description: plainText(props[PROPERTY.description]),
		date: dateProp?.type === 'date' ? (dateProp.date?.start ?? '') : '',
	}
}

export async function getPosts(): Promise<Post[]> {
	if (!process.env.NOTION_TOKEN || !databaseId) return []

	try {
		const response = await notion.databases.query({
			database_id: databaseId,
			filter: {
				property: PROPERTY.published,
				checkbox: { equals: true },
			},
			sorts: [{ property: PROPERTY.date, direction: 'descending' }],
		})

		return response.results.filter(isPage).map(toPost)
	} catch (error) {
		console.error('Failed to fetch posts from Notion:', error)
		return []
	}
}

export async function getPost(slug: string): Promise<{ post: Post; html: string } | null> {
	if (!process.env.NOTION_TOKEN || !databaseId) return null

	const response = await notion.databases.query({
		database_id: databaseId,
		filter: {
			and: [
				{ property: PROPERTY.published, checkbox: { equals: true } },
				{ property: PROPERTY.slug, rich_text: { equals: slug } },
			],
		},
		page_size: 1,
	})

	const page = response.results.find(isPage)
	if (!page) return null

	const blocks = await n2m.pageToMarkdown(page.id)
	const markdown = n2m.toMarkdownString(blocks).parent
	const html = await markdownToHtml(markdown)

	return { post: toPost(page), html }
}
