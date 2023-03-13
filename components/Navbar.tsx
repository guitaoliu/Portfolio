import { HStack, IconButton, useColorMode, Link } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack w="full" alignItems="center" justifyContent="center" spacing={5}>
      <Link href="/" textDecoration="underline">
        Home
      </Link>
      <Link href="https://read.cv/gtliu" isExternal>
        Resume
      </Link>
      {colorMode === 'dark' ? (
        <IconButton
          aria-label="Turn into light mode"
          icon={<SunIcon />}
          variant="ghost"
          onClick={toggleColorMode}
        />
      ) : (
        <IconButton
          aria-label="Turn into dark mode"
          icon={<MoonIcon />}
          variant="ghost"
          onClick={toggleColorMode}
        />
      )}
    </HStack>
  )
}

export default Navbar
