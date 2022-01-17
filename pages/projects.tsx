import React from 'react'
import { Heading, useColorModeValue, VStack } from '@chakra-ui/react'
import Shell from '@/components/Shell'
import Project from '@/components/Project'
import projects from 'data/projects'
import Page from '@/components/Page'

const Projects: React.FC = () => {
  const headingColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')

  return (
    <Page name='Projects' path='/projects'>
      <Shell>
        <Heading color={headingColor} mb={8}>
          Projects
        </Heading>
        <VStack spacing={4} align='stretch'>
          {projects.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </VStack>
      </Shell>
    </Page>
  )
}
export default Projects
