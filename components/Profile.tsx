import {
  Flex,
  VStack,
  Text,
  Link,
  Img,
  useColorModeValue,
} from '@chakra-ui/react'

import avatar from '../public/avatar.png'

const Profile = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      spacing={5}>
      <VStack m={5} maxW="50%">
        <Img
          src={avatar.src}
          alt="Guitao Liu Avatar"
          w={48}
          borderRadius="full"
        />
        <Text as="b" fontSize="2xl" letterSpacing="wider">
          Guitao
        </Text>
      </VStack>
      <VStack maxW={{ base: 'full', md: '70%' }} alignItems="flex-start">
        {' '}
        <Text>
          He is currently a M.Eng. student in Electrical and Computer
          Engineering at{' '}
          <Link
            href="https://uottawa.ca"
            isExternal
            display="inline"
            color="red.600"
            _hover={{ textDecoration: 'underline' }}>
            uOttawa
          </Link>
          .
        </Text>
        <Text>
          He has projects written with Flask, Electron, OpenCV and more. He is
          acquainted with Python, JavaScript and Matlab.
        </Text>
        <Text>
          He is now learn to code with Golang. He is seeking knowledge of
          distributed system and cloud infra.
        </Text>
        <Text>
          His first language is Chinese. He can also communicate in English. He
          tries to add some French as well.
        </Text>
        <Text>
          He can be found at{' '}
          <Link
            href="https://twitter.com/gtliuu"
            isExternal
            color="blue.400"
            _hover={{ textDecoration: 'underline' }}>
            Twitter
          </Link>
          ,{' '}
          <Link
            href="https://github.com/guitaoliu"
            isExternal
            _hover={{ textDecoration: 'underline' }}>
            GitHub
          </Link>{' '}
          and{' '}
          <Link
            href="https://www.linkedin.com/in/guitao-liu-a891721a2/"
            isExternal
            color="cyan.500"
            _hover={{ textDecoration: 'underline' }}>
            Linkedin
          </Link>
          . He is also reachable via{' '}
          <Link href="mailto:gtliu52@gmail.com" color="gray.500">
            Personal
          </Link>{' '}
          or{' '}
          <Link href="mailto:guitao.liu@uottawa.ca" color="teal.500">
            School
          </Link>{' '}
          email.
        </Text>
      </VStack>
    </Flex>
  )
}

export default Profile
