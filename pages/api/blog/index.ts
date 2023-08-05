import { NextApiRequest, NextApiResponse } from 'next'

import { notion } from 'lib/notion'

const blog = async (_req: NextApiRequest, res: NextApiResponse) => {
	const blogs = await notion.getReleasedBlogs()
	return res.status(200).json({
		blogs,
	})
}

export default blog
