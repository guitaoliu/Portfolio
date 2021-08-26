import { Text } from '@chakra-ui/react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return <Text py={2}>Guitao Liu © 2019 - {currentYear}</Text>
}

export default Footer
