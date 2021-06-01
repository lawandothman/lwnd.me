import React from 'react'
import {
  Box, Heading, Text, useColorModeValue,
} from '@chakra-ui/react'
import Shell from '@/components/Shell'
import { Head } from 'next/document'

const Home:React.FC = () => {
  const headingColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.700')

  return (
    <div>
      <Head>
        <title>lwnd.me</title>
      </Head>
      <Shell>
        <Box mt={20}>
          <Heading color={headingColor} mb={4}>
            Hey, I’m Lawand Othman
          </Heading>
          <Text color={textColor} mb={2} fontWeight='medium'>
            I’m a software devleoper based in Birmingham, UK.
          </Text>
          <Text color={textColor} fontWeight='medium'>
            You’ve found my personal slice of the internet where I share all the
            beautiful and fun stuff I’m working on.
          </Text>
        </Box>
      </Shell>
    </div>

  )
}
export default Home
