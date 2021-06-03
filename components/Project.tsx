import { IProject } from 'types'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import NextChakraLink from './NextChakraLink'

interface ProjectProps {
  project: IProject
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.700')

  return (
    <Box fontWeight='bold' key={project.title}>
      <NextChakraLink
        href={project.source}
        _hover={{ textDecoration: 'none' }}
        target='blank'
        _focus={{ boxShadow: 'none' }}
      >
        {project.title}
      </NextChakraLink>
      <Text fontWeight='light' color={textColor}>
        {project.description}
      </Text>
    </Box>
  )
}

export default Project
