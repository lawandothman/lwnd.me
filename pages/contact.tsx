import React from 'react'
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Shell from '@/components/Shell'
import { Email, GitHub, KoFi, LinkedIn, Twitter } from '@/components/Icons'
import Page from '@/components/Page'
import { NextPage } from 'next'

const Contact: NextPage = () => {
  const headingColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  const iconColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.700')

  return (
    <Page name='Contact' path='/contact'>
      <Shell>
        <Box>
          <Heading color={headingColor} mb={4}>
            Contact me
          </Heading>
          <Text color={textColor} mb={2} fontWeight='medium'>
            Have a question or want to work together?
          </Text>

          <Flex mt={12} direction='row' justifyContent='space-between'>
            <IconButton
              aria-label='Email'
              borderWidth={['0px', '1px']}
              p={4}
              icon={
                <Email
                  fill={iconColor}
                  width='30'
                  height='30'
                  viewBox='0 0 58 58'
                />
              }
              variant='outline'
              as='a'
              href='mailto:lwnd@pm.me'
              _focus={{ boxShadow: 'none' }}
            />
            <IconButton
              aria-label='GitHub'
              borderWidth={['0px', '1px']}
              p={4}
              icon={
                <GitHub
                  fill={iconColor}
                  width='30'
                  height='30'
                  viewBox='0 0 58 58'
                />
              }
              variant='outline'
              as='a'
              href='https://github.com/lawandothman'
              target='_blank'
              _focus={{ boxShadow: 'none' }}
            />
            <IconButton
              aria-label='LinkedIn'
              borderWidth={['0px', '1px']}
              p={4}
              icon={
                <LinkedIn
                  fill={iconColor}
                  width='30'
                  height='30'
                  viewBox='0 0 58 58'
                />
              }
              variant='outline'
              as='a'
              href='https://www.linkedin.com/in/lawandothman/'
              target='_blank'
              _focus={{ boxShadow: 'none' }}
            />
            <IconButton
              aria-label='Twitter'
              borderWidth={['0px', '1px']}
              p={4}
              icon={
                <Twitter
                  fill={iconColor}
                  width='30'
                  height='30'
                  viewBox='0 0 58 58'
                />
              }
              variant='outline'
              as='a'
              href='https://twitter.com/lwndothman'
              target='_blank'
              _focus={{ boxShadow: 'none' }}
            />
            <IconButton
              aria-label='Ko-Fi'
              borderWidth={['0px', '1px']}
              p={4}
              icon={
                <KoFi
                  fill={iconColor}
                  width='30'
                  height='30'
                  viewBox='0 0 58 58'
                />
              }
              variant='outline'
              as='a'
              href='https://ko-fi.com/lawand'
              target='_blank'
              _focus={{ boxShadow: 'none' }}
            />
          </Flex>
        </Box>
      </Shell>
    </Page>
  )
}
export default Contact
