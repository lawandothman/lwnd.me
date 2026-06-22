import rehypeCodeFrame from '@/lib/rehype-code-frame'
import { vercelTheme } from '@/lib/shiki-theme'
import rehypeShiki from '@shikijs/rehype'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

const processor = unified()
	.use(remarkParse)
	.use(remarkGfm)
	.use(remarkRehype)
	.use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] })
	.use(rehypeShiki, { theme: vercelTheme })
	.use(rehypeCodeFrame)
	.use(rehypeStringify)

export async function markdownToHtml(markdown: string): Promise<string> {
	const file = await processor.process(markdown)
	return String(file)
}
