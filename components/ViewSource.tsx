import { HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { GitHub } from './Icons'
import NextChakraLink from './NextChakraLink'

interface ViewSourceProps {
  source: string
}

const ViewSource: React.FC<ViewSourceProps> = ({ children, source }) => (
  <NextChakraLink
    href={source}
    isExternal
    px='8px'
    display='flex'
    alignItems='center'
    minH='21px'
    mb='3px'
    borderWidth='1px'
    borderRadius='md'
    color={useColorModeValue('blackAlpha.900', 'whiteAlpha.700')}
    fill={useColorModeValue('blackAlpha.900', 'whiteAlpha.700')}
    _hover={{
      color: useColorModeValue('blackAlpha.900', 'whiteAlpha.900'),
      fill: useColorModeValue('blackAlpha.900', 'whiteAlpha.900'),
      boxShadow: 'sm',
      transform: 'translateY(-1px)',
    }}
    _focus={{ boxShadow: 'none' }}
  >
    <HStack px='0.5px' py='2px'>
      <GitHub viewBox='0 -3 50 70' width='4' height='4' />
      <Text fontSize='sm'>{children}</Text>
    </HStack>
  </NextChakraLink>
)

export default ViewSource