import { IProject } from 'types'
import {
  Box,
  HStack,
  Text,
  useColorModeValue,
  WrapItem,
} from '@chakra-ui/react'

import React from 'react'
import NextChakraLink from './NextChakraLink'
import ViewSource from './ViewSource'

interface ProjectProps {
  project: IProject
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.700')

  return (
    <Box fontWeight='bold' key={project.title}>
      <HStack mb={2} spacing={4}>
        {project.url ? (
          <NextChakraLink
            href={project.url}
            _hover={{ textDecoration: 'none' }}
            target='blank'
            _focus={{ boxShadow: 'none' }}
          >
            {project.title}
          </NextChakraLink>
        ) : (
          <Text>{project.title}</Text>
        )}
        <WrapItem>
          <ViewSource source={project.source}>View source</ViewSource>
        </WrapItem>
      </HStack>

      <Text fontWeight='light' color={textColor}>
        {project.description}
      </Text>
    </Box>
  )
}

export default Project
