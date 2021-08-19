import React from 'react'

import { Text, Link, Icon } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'

const Footer = () => {
  return (
    <Text>
      Made with {<Icon as={AiFillHeart} color="red" />} by{' '}
      <Link colorScheme="cyan" href="https://github.com/guitaoliu">
        Guitao
      </Link>
    </Text>
  )
}

export default Footer
