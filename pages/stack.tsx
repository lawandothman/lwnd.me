import React from 'react'
import {
  Heading, Text, useColorModeValue, VStack,
} from '@chakra-ui/react'
import Shell from '@/components/Shell'
import StackItem from '@/components/StackItem'
import stack from 'data/stack'
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
        <Heading color={headingColor} mb={4}>
          Stack
        </Heading>
        <Text color={textColor} mb={8} fontWeight='medium'>
          My favourite tools and software.
        </Text>
        <VStack spacing={4}>
          {stack.map((_stack) => (
            <StackItem stack={_stack} key={_stack.name} />
          ))}
        </VStack>
      </Shell>
    </div>
  )
}
export default Stack
