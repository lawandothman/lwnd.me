import React from 'react'
import {
  Box, Heading, Text, useColorModeValue,
} from '@chakra-ui/react'
import Shell from '@/components/Shell'
import Head from 'next/head'

const Stack: React.FC = () => {
  const headingColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.700')

  return (
    <div>
      <Head>
        <title>lwnd</title>
      </Head>
      <Shell>
        <Box mt={20}>
          <Heading color={headingColor} mb={4}>
            Stack
          </Heading>
          <Text color={textColor} mb={2} fontWeight='medium'>
            My favourite tools and software.
          </Text>
          <Text color={textColor} mb={2} fontSize='sm'>
            This page is under construction, please check back later.
          </Text>
        </Box>
      </Shell>
    </div>
  )
}
export default Stack
