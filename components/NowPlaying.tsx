import fetcher from '@/lib/fetcher'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import useSWR from 'swr'
import { Spotify } from './Icons'
import NextChakraLink from './NextChakraLink'

const NowPlaying: React.FC = () => {
  const { data } = useSWR('/api/now-playing', fetcher)

  const color = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  return (
    <Box maxW='590'>
      <Text fontSize='m' mb={2}>
        <Spotify
          fill={data?.songUrl ? '#1DB954' : color}
          viewBox='0 0 70 55'
          width='6'
          height='6'
          mr={2}
          mb={1}
        />
        {data?.songUrl ? (
          <NextChakraLink
            href={data.songUrl}
            target='_blank'
            _hover={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
          >
            <Text as='span'>
              {data.title} - {data.artist}
            </Text>
          </NextChakraLink>
        ) : (
          <span>Not Playing</span>
        )}
      </Text>
    </Box>
  )
}

export default NowPlaying
