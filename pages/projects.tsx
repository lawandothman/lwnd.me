import { Heading, VStack } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'

import { Page, Project, Shell } from 'components'

import projects from 'data/projects'

const Projects: NextPage = () => {
	return (
		<Page name='Projects' path='/projects'>
			<Shell>
				<Heading color='heading' mb={8}>
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
