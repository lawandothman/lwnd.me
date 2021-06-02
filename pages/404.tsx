import Shell from '@/components/Shell'
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

const Custom404: React.FC = () => {
  const headingColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.700')
  return (
    <div>
      <Head>
        <title>lwnd</title>
      </Head>
      <Shell>
        <Box mt={20} height='65vh'>
          <Heading color={headingColor} mb={10}>
            404 - Page Not Found
          </Heading>
          <Text mb={10} fontWeight='medium' color={textColor}>
            It seems that you&apos;ve found something that used to be here, or
            you spelled something wrong. I&apos;m guessing you spelled something
            wrong. Can you double check that URL?
          </Text>
          <Flex justifyContent='flex-end'>
            <Link href='/' passHref>
              <Button as='a' px={8} _focus={{ boxShadow: 'none' }}>
                Return Home
              </Button>
            </Link>
          </Flex>
        </Box>
      </Shell>
    </div>
  )
}

export default Custom404
