import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  IconButton,
  Divider,
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
    <Box backgroundColor={bg}>
      <Flex as='nav' backgroundColor={bg} w='full'>
        <Flex
          alignItems='center'
          backgroundColor={bg}
          justifyContent='space-between'
          p={8}
          mx='auto'
          mb={8}
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

      <Flex
        as='main'
        mx='auto'
        maxWidth={590}
        direction='column'
        px={8}
        overflow='auto'
        mb={6}
      >
        {children}
      </Flex>

      <Box as='footer' px={8} maxWidth={590} mx='auto' mt={20}>
        <Divider
          w='full'
          color='black'
          orientation='horizontal'
        />
        <Box mt={4}>
          <NowPlaying />
          <Text fontSize='xs' color={textColor}>
            Built with Next.js and Vercel
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
export default Shell
