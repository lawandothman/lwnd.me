import React from 'react'
import {
  Badge,
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import Shell from '@/components/Shell'
import Head from 'next/head'
import NextChakraLink from '@/components/NextChakraLink'

const Projects: React.FC = () => {
  const headingColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.700')
  const badgeColor = useColorModeValue('blackAlpha', 'whiteAlpha')

  return (
    <div>
      <Head>
        <title>lwnd</title>
      </Head>
      <Shell>
        <Box mt={20} height='65vh'>
          <Heading color={headingColor} mb={4}>
            Projects
          </Heading>
          <UnorderedList ml={8} listStyleType='none'>
            <VStack spacing={4} align='stretch'>
              <ListItem fontWeight='bold'>
                <NextChakraLink
                  href='https://github.com/lawandothman/pokedex'
                  _hover={{ textDecoration: 'none' }}
                  target='blank'
                  _focus={{ boxShadow: 'none' }}
                >
                  Pokédex
                </NextChakraLink>
                <Badge
                  variant='outline'
                  ml={2}
                  px={2}
                  colorScheme={badgeColor}
                  as='a'
                  href='https://law-pokedex.herokuapp.com/'
                  target='_blank'
                >
                  Live
                </Badge>
                <Text fontWeight='light' color={textColor}>
                  My first project in my journey to learn web development
                </Text>
              </ListItem>
            </VStack>
          </UnorderedList>
        </Box>
      </Shell>
    </div>
  )
}
export default Projects
