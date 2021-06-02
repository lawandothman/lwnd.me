import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  IconButton,
  Divider,
  Center,
  Text,
} from '@chakra-ui/react'
import NextChakraLink from './NextChakraLink'
import NowPlaying from './NowPlaying'

const Shell: React.FC = ({ children }) => {
  const bg = useColorModeValue('white', 'black')
  const color = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.700')
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box backgroundColor={bg} h='100vh'>
      <nav>
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
            <Flex mr={4}>
              {colorMode === 'light' ? (
                <IconButton
                  onClick={toggleColorMode}
                  _focus={{ boxShadow: 'none' }}
                  aria-label='Dark Mode'
                  icon={<MoonIcon color={color} />}
                />
              ) : (
                <IconButton
                  onClick={toggleColorMode}
                  _focus={{ boxShadow: 'none' }}
                  aria-label='Light Mode'
                  icon={<SunIcon color={color} />}
                />
              )}
            </Flex>

            <Flex
              alignItems='center'
              justifyContent='space-between'
              w='350px'
              color={color}
            >
              <NextChakraLink
                _hover={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none' }}
                href='/projects'
              >
                Projects
              </NextChakraLink>
              <NextChakraLink
                _hover={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none' }}
                href='/stack'
              >
                Stack
              </NextChakraLink>
              <NextChakraLink
                _hover={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none' }}
                href='/contact'
              >
                Contact
              </NextChakraLink>
              <NextChakraLink
                _hover={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none' }}
                href='/'
              >
                Home
              </NextChakraLink>
            </Flex>
          </Flex>
        </Flex>
      </nav>

      <main>
        <Flex mx='auto' maxWidth={590} direction='column' px={8}>
          {children}
        </Flex>
      </main>

      <footer>
        <Center>
          <Divider maxWidth={590} color='black' orientation='horizontal' />
        </Center>
        <Flex
          px={8}
          mx='auto'
          maxW={590}
          justifyContent='center'
          direction='column'
        >
          <Box mt={2}>
            <NowPlaying />
            <Text fontWeight='light' fontSize='sm' color={textColor}>
              Built with Next.js and Vercel
            </Text>
          </Box>
        </Flex>
      </footer>
    </Box>
  )
}
export default Shell
