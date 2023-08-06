import { NextApiRequest, NextApiResponse } from 'next'

import { notion } from 'lib/notion'

const blogPage = async (req: NextApiRequest, res: NextApiResponse) => {
	const id = req.query.id
	if (id && typeof id === 'string') {
		const page = await notion.getPageBlocks(id)

		return res.status(200).json({
			page,
		})
	} else {
		return res.status(500).json({
			message: 'Something went wrong',
		})
	}
}

export default blogPage
