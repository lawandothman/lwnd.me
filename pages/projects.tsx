import React from 'react'
import {
  Box, Heading, useColorModeValue, VStack,
} from '@chakra-ui/react'
import Shell from '@/components/Shell'
import Head from 'next/head'
import Project from '@/components/Project'
import projects from 'data/projects'

const Projects: React.FC = () => {
  const headingColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')

  return (
    <div>
      <Head>
        <title>lwnd</title>
      </Head>
      <Shell>
        <Box mt={20} height='80vh'>
          <Heading color={headingColor} mb={8}>
            Projects
          </Heading>
          <VStack spacing={4} align='stretch'>
            {projects.map((project) => (
              <Project project={project} key={project.title} />
            ))}
          </VStack>
        </Box>
      </Shell>
    </div>
  )
}
export default Projects
