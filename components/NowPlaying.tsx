import fetcher from '@/lib/fetcher'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import useSWR from 'swr'
import { Spotify } from './Icons'

const NowPlaying: React.FC = () => {
  const { data } = useSWR('/api/now-playing', fetcher)

  const color = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  return (
    <Box maxW='590'>
      <Text fontSize='m' mb={8}>
        <Spotify fill={color} viewBox='0 0 70 55' width='8' height='8' mr={3} />
        {data?.songUrl ? (
          <a href={data.songUrl} target='_blank' rel='noreferrer'>
            <span>
              {data.title} - {data.artist}{' '}
            </span>
          </a>
        ) : (
          <span>Not Playing</span>
        )}
      </Text>
    </Box>

  )
}

export default NowPlaying
