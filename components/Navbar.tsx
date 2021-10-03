import Link from 'next/link'
import {
  HStack,
  Link as CLink,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack w="full" alignItems="center" justifyContent="center" spacing={5}>
      <Link href="/" passHref>
        <CLink textDecoration="underline">Home</CLink>
      </Link>
      <CLink href="https://blog.gtliu.com" isExternal>
        Blog
      </CLink>
      <Link href="/leetcode" passHref>
        <CLink>LeetCode</CLink>
      </Link>
      <CLink
        href="https://keys.openpgp.org/search?q=C5905C14A4321A938272A2E2330D765C278644FD"
        isExternal
      >
        GPG
      </CLink>
      <CLink href="/Resume.pdf" isExternal>
        Resume
      </CLink>
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
