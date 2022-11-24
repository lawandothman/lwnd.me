import {
	Link as ChakraLink,
	LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { LinkProps as NextLinkProps } from 'next/dist/client/link'
import NextLink from 'next/link'
import { PropsWithChildren } from 'react'

type NextChakraLinkProps = PropsWithChildren<
	NextLinkProps & Omit<ChakraLinkProps, 'as'>
>

export const NextChakraLink = ({
	href,
	as,
	replace,
	scroll,
	shallow,
	prefetch,
	children,
	...chakraProps
}: NextChakraLinkProps) => (
	<NextLink
		passHref
		href={href}
		as={as}
		replace={replace}
		scroll={scroll}
		shallow={shallow}
		prefetch={prefetch}
		legacyBehavior
	>
		<ChakraLink {...chakraProps}>{children}</ChakraLink>
	</NextLink>
)
