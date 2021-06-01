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
          py={4}
          px={8}
          margin='0 auto'
          maxW='1250px'
          w='full'
        >
          <Flex>
            {colorMode === 'light' ? (
              <Button
                onClick={toggleColorMode}
                ml={10}
                variant='ghost'
                _focus={{ boxShadow: 'none' }}
              >
                <MoonIcon color={color} />
              </Button>
            ) : (
              <Button
                onClick={toggleColorMode}
                ml={10}
                variant='ghost'
                _focus={{ boxShadow: 'none' }}
              >
                <SunIcon color={color} />
              </Button>
            )}
          </Flex>

          <Flex alignItems='center' justifyContent='center'>
            <Link href='/' color={color} mr={10}>
              Projects
            </Link>
            <Link href='/' color={color} mr={10}>
              Stack
            </Link>
            <Link href='/' color={color} mr={10}>
              Contact
            </Link>
            <Link href='/' color={color} mr={10}>
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
