import { HStack, Link, IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack w="full" alignItems="center" justifyContent="center" spacing={5}>
      <Link href="/" textDecoration="underline">
        Home
      </Link>
      <Link href="https://blog.gtliu.com" isExternal>
        Blog
      </Link>
      <Link
        href="https://keys.openpgp.org/search?q=C5905C14A4321A938272A2E2330D765C278644FD"
        isExternal>
        GPG
      </Link>
      <Link href="/Resume.pdf">Resume</Link>
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
