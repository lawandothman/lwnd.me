import React from 'react'
import { Heading, Text, VStack } from '@chakra-ui/react'
import Shell from '@/components/Shell'
import StackItem from '@/components/StackItem'
import stack from 'data/stack'
import Page from '@/components/Page'
import { NextPage } from 'next'

const Stack: NextPage = () => {
  return (
    <Page name='Stack' path='/stack'>
      <Shell>
        <Heading color='heading' mb={4}>
          Stack
        </Heading>
        <Text color='text' mb={8} fontWeight='medium'>
          My favourite tools and software.
        </Text>
        <VStack spacing={4}>
          {stack.map((_stack) => (
            <StackItem stack={_stack} key={_stack.name} />
          ))}
        </VStack>
      </Shell>
    </Page>
  )
}
export default Stack
