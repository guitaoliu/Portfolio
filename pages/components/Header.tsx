import { HStack, Link } from '@chakra-ui/react'

const Header = () => {
  return (
    <HStack w="full" alignItems="center" justifyContent="center" spacing={10}>
      <Link href="/" textDecoration="underline" color="gray">
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
      <Link href="/">Resume</Link>
    </HStack>
  )
}

export default Header
