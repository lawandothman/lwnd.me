import React from 'react'
import { Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Shell from '@/components/Shell'
import { NextPage } from 'next'

const Home: NextPage = () => {
  const headingColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.700')

  return (
    <Shell>
      <Heading color={headingColor} mb={4}>
        Hey, I’m Lawand Othman
      </Heading>
      <Text color={textColor} mb={2} fontWeight='medium'>
        I’m a developer based in London, UK. You’ve found my personal slice of
        the internet where I share all the beautiful and fun stuff I’m working
        on.
      </Text>
    </Shell>
  )
}
export default Home
