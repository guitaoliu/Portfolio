import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Roboto, sans-serif',
    mono: 'monospace',
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
})

export default theme
