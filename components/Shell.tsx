import { Box, Flex, Divider, Text } from '@chakra-ui/react'
import navbarItems from 'data/navbarItems'
import ColorModeTrigger from './ColorModeTrigger'
import NextChakraLink from './NextChakraLink'
import NowPlaying from './NowPlaying'

const Shell: React.FC = ({ children }) => {
  return (
    <Box>
      <Flex as='nav' w='full'>
        <Flex
          alignItems='center'
          justifyContent='space-between'
          p={8}
          mx='auto'
          mb={8}
          maxW='1250px'
          w='full'
        >
          <ColorModeTrigger />
          <Flex
            alignItems='center'
            justifyContent='space-between'
            w='350px'
            color='heading'
          >
            {navbarItems.map((item) => (
              <NextChakraLink
                _hover={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none' }}
                href={item.href}
                key={item.title}
              >
                {item.title}
              </NextChakraLink>
            ))}
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
        <Divider w='full' color='black' orientation='horizontal' />
        <Box my={4}>
          <NowPlaying />
          <Text fontSize='xs' color='text'>
            Built with Next.js and Vercel
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
export default Shell
