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

interface IProject {
  title: string
  source: string
  description: string
  url?: string
}

const Projects: React.FC = () => {
  const headingColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.700')
  const badgeColor = useColorModeValue('blackAlpha', 'whiteAlpha')

  const projects: IProject[] = [
    {
      title: 'Pokédex',
      source: 'https://github.com/lawandothman/pokedex',
      url: 'https://law-pokedex.herokuapp.com/',
      description: 'My first project in my journey to learn web development',
    },
    {
      title: 'Litter',
      source: 'https://github.com/lawandothman/litter',
      url: 'https://litter-cf67f.web.app/',
      description: 'A microbloggin and social networking service',
    },
    {
      title: 'Shopcart',
      source: 'https://github.com/lawandothman/shopcart',
      url: 'https://shopcart-lwnd.herokuapp.com/',
      description: 'Ecommerce plarform with Paypal integration',
    },
    {
      title: 'Fast Feedback',
      source: 'https://github.com/lawandothman/fastfeedback',
      url: 'https://fastfeedback-lwnd.vercel.app',
      description: 'SaaS to add feedback to static sites',
    },
    {
      title: 'Swindler',
      source: 'https://github.com/pedsm/swindler',
      description: 'CovHac2020 2nd Place Winner - A social deception game',
    },
    {
      title: 'White Rabbit',
      source: 'https://github.com/pedsm/white-rabbit',
      url: 'https://pedsm.itch.io/white-rabbit',
      description: 'Ludum Dare 48 - no checkpoint 2D platformer game',
    },
  ]

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
              {projects.map((project) => (
                <ListItem fontWeight='bold'>
                  <NextChakraLink
                    href={project.source}
                    _hover={{ textDecoration: 'none' }}
                    target='blank'
                    _focus={{ boxShadow: 'none' }}
                  >
                    {project.title}
                  </NextChakraLink>
                  {project.url && (
                    <Badge
                      variant='outline'
                      ml={2}
                      px={2}
                      colorScheme={badgeColor}
                      as='a'
                      href={project.url}
                      target='_blank'
                    >
                      Live
                    </Badge>
                  )}
                  <Text fontWeight='light' color={textColor}>
                    {project.description}
                  </Text>
                </ListItem>
              ))}
            </VStack>
          </UnorderedList>
        </Box>
      </Shell>
    </div>
  )
}
export default Projects
