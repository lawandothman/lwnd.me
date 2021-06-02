import React from 'react'
import {
  Box, Heading, useColorModeValue,
} from '@chakra-ui/react'
import Shell from '@/components/Shell'
import Head from 'next/head'

const Projects:React.FC = () => {
  const headingColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')

  return (
    <div>
      <Head>
        <title>lwnd</title>
      </Head>
      <Shell>
        <Box mt={20}>
          <Heading color={headingColor} mb={4}>
            Projects
          </Heading>
        </Box>
      </Shell>
    </div>
  )
}
export default Projects
