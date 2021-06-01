import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

const Shell: React.FC = ({ children }) => {
  const bg = useColorModeValue('white', 'black')
  const color = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box backgroundColor={bg} h='100vh'>
      <Flex backgroundColor={bg} w='full'>
        <Flex
          alignItems='center'
          backgroundColor={bg}
          justifyContent='space-between'
          p={8}
          margin='0 auto'
          maxW='1250px'
          w='full'
        >
          <Flex>
            {colorMode === 'light' ? (
              <Button
                onClick={toggleColorMode}
                mr={10}
                variant='solid'
                _focus={{ boxShadow: 'none' }}
              >
                <MoonIcon color={color} />
              </Button>
            ) : (
              <Button
                onClick={toggleColorMode}
                mr={10}
                variant='solid'
                _focus={{ boxShadow: 'none' }}
              >
                <SunIcon color={color} />
              </Button>
            )}
          </Flex>

          <Flex alignItems='center' justifyContent='space-between' w='400px'>
            <Link href='/' color={color}>
              Projects
            </Link>
            <Link href='/' color={color}>
              Stack
            </Link>
            <Link href='/' color={color}>
              Contact
            </Link>
            <Link href='/' color={color}>
              Home
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin='0 auto' direction='column' maxW='1250px' px={8}>
        {children}
      </Flex>
    </Box>
  )
}
export default Shell