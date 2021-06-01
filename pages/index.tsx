import {
  Box, Heading, Text, useColorModeValue,
} from '@chakra-ui/react'
import Head from 'next/head'
import Shell from './components/Shell'

const Home = () => {
  const color = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  return (
    <div>
      <Head>
        <title>lwnd.me</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Shell>
        <Box ml='auto' mr='auto' maxWidth={590} mt={20}>
          <Heading color={color} mb={4}>
            Hey, I’m Lawand Othman
          </Heading>
          <Text color={color} pb={2} fontWeight='medium'>
            I’m a software devleoper based in Birmingham, UK.
          </Text>
          <Text color={color} fontWeight='medium'>
            You’ve found my personal slice of the internet where I share all the
            beautiful and fun stuff I’m working on.
          </Text>
        </Box>
      </Shell>

    </div>
  )
}
export default Home
