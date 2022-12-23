import { Box, HStack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { IProject } from 'types'

import { NextChakraLink, ViewSourceButton } from 'components'

interface ProjectProps {
	project: IProject
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
	return (
		<Box fontWeight='bold' key={project.title}>
			<HStack mb={2} spacing={4}>
				{project.url ? (
					<NextChakraLink
						rel='noreferrer'
						href={project.url}
						_hover={{ textDecoration: 'none' }}
						target={project.url === '#' ? '_self' : '_blank'}
						_focus={{ boxShadow: 'none' }}
					>
						{project.title}
					</NextChakraLink>
				) : (
					<Text>{project.title}</Text>
				)}
				{project.source && (
					<ViewSourceButton source={project.source}>
						View source
					</ViewSourceButton>
				)}
				{project.inProgress && (
					<Tag variant='subtle' rounded='md' px={3} py={0} colorScheme='gray'>
						Work in Progress
					</Tag>
				)}
			</HStack>

			<Text fontWeight='light' color='text'>
				{project.description}
			</Text>
		</Box>
	)
}
