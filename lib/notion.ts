import { Client, LogLevel } from '@notionhq/client'
import {
	BlockObjectResponse,
	PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { config } from 'config'

const {
	notion: { NOTION_SECRET, NOTION_DATABASE_ID },
} = config

class NotionAPI {
	private client
	private databaseId

	constructor() {
		this.client = new Client({
			auth: NOTION_SECRET,
			logLevel: LogLevel.DEBUG,
		})
		this.databaseId = NOTION_DATABASE_ID
	}

	public async getReleasedBlogs() {
		const response = await this.client.databases.query({
			database_id: this.databaseId,
			filter: {
				property: 'status',
				select: {
					equals: 'Released',
				},
			},
		})

		const results = response.results as PageObjectResponse[]

		const blogs = results
			.map((blog) => {
				if (
					blog.properties['page'] &&
					blog.properties['page'].type === 'title'
				) {
					return {
						id: blog.id,
						title: blog.properties['page'].title[0].plain_text,
					}
				} else {
					return null
				}
			})
			.filter(Boolean)

		return blogs
	}

	public async getPageBlocks(pageId: string) {
		const pageBlocks = await this.client.blocks.children.list({
			block_id: pageId,
		})

		return pageBlocks.results as BlockObjectResponse[]
	}
}

export const notion = new NotionAPI()
