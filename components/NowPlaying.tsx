import fetcher from '@/lib/fetcher'
import { Box, Text } from '@chakra-ui/react'
import useSWR from 'swr'
import { Spotify } from './Icons'
import NextChakraLink from './NextChakraLink'

const NowPlaying: React.FC = () => {
  const { data } = useSWR('/api/now-playing', fetcher)

  return (
    <Box maxW='590'>
      <Text fontSize='m' mb={2}>
        <Spotify
          fill={data?.songUrl ? '#1DB954' : 'icon'}
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
            rel='noopener noreferrer'
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
