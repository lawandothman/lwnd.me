import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Flex, IconButton, useColorMode } from '@chakra-ui/react'

const ColorModeTrigger = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex mr={4}>
      {colorMode === 'light' ? (
        <IconButton
          onClick={toggleColorMode}
          _focus={{ boxShadow: 'none' }}
          aria-label='Dark Mode'
          icon={<MoonIcon color='icon' />}
        />
      ) : (
        <IconButton
          onClick={toggleColorMode}
          _focus={{ boxShadow: 'none' }}
          aria-label='Light Mode'
          icon={<SunIcon color='icon' />}
        />
      )}
    </Flex>
  )
}

export default ColorModeTrigger
