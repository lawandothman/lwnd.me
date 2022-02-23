import { Flex, useColorModeValue, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import { IStack } from '../types'

type StackItemProps = {
  stack: IStack
}

const StackItem: React.FC<StackItemProps> = ({ stack }) => {
  const backgroundColor = useColorModeValue('gray.100', 'whiteAlpha.200')
  return (
    <Flex
      as='a'
      href={stack.url}
      rel='noopener noreferrer'
      target='_blank'
      alignItems='center'
      width='full'
      borderRadius={8}
      p={2}
      transitionDuration='0.25s'
      _hover={{ backgroundColor }}
    >
      <Icon fill='icon' viewBox='0 0 58 58' w='58' height='58'>
        {stack.icon}
      </Icon>

      <Flex direction='column' ml={6}>
        <Text fontWeight='medium'>{stack.name}</Text>
        <Text fontSize='sm' fontWeight='light' color='text'>
          {stack.description}
        </Text>
      </Flex>
    </Flex>
  )
}

export default StackItem
