import React from 'react'
import {
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Flex,
} from '@chakra-ui/react'
import { VSCode } from '@/components/Icons'
import Shell from '@/components/Shell'
import Head from 'next/head'

const Stack: React.FC = () => {
  const headingColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.700')
  const backgroundColor = useColorModeValue('gray.100', 'whiteAlpha.200')

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
          <Flex
            as='a'
            href='https://code.visualstudio.com/'
            rel='noopener noreferrer'
            target='_blank'
            alignItems='center'
            width='full'
            borderRadius={8}
            p={2}
            transitionDuration='0.25s'
            _hover={{ backgroundColor }}
          >
            <VSCode viewBox='0 0 58 58' w='58' height='58' />
            <Flex direction='column' ml={6}>
              <Text fontWeight='medium'>VSCode</Text>
              <Text fontSize='sm' fontWeight='light' color={textColor}>
                My code editor of choice
              </Text>
            </Flex>
          </Flex>
        </VStack>
      </Shell>
    </div>
  )
}
export default Stack
