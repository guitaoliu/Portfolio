import { Flex, VStack, Text, Link, Img } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/system'

import avatar from '../public/avatar.png'

const Profile = () => {
  const uOttawaColor = useColorModeValue('red.600', 'red.400')
  const entrustColor = useColorModeValue('purple', 'purple.200')
  const twitterColor = useColorModeValue('blue.400', 'blue.200')
  const githubColor = useColorModeValue('gray.500', 'gray.200')
  const linkedinColor = useColorModeValue('cyan.500', 'cyan.200')
  const personalEmail = useColorModeValue('gray.500', 'gray.200')
  const schoolEmail = useColorModeValue('teal.500', 'teal.200')
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
    >
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
          He is currently pursuing a Master of Engineering degree in Electrical
          and Computer Engineering at{' '}
          <Link
            href="https://uottawa.ca"
            isExternal
            display="inline"
            color={uOttawaColor}
            _hover={{ textDecoration: 'underline' }}
          >
            the University of Ottawa
          </Link>
          . He has experience working on projects using Flask, Electron, React,
          and other technologies. He is proficient in programming languages such
          as Python, JavaScript, Java, and Typescript.
        </Text>
        <Text>
          He is now an intern at{' '}
          <Link
            href="https://www.entrust.com"
            isExternal
            display="inline"
            color={entrustColor}
            _hover={{ textDecoration: 'underline' }}
          >
            Entrust
          </Link>
          , where he works with Java and Typescript and has gained experience
          using Spring. He is also seeking knowledge in the areas of distributed
          systems and cloud infrastructure.
        </Text>
        <Text>
          He is fluent in Chinese and English, and he is dedicated to
          continuously improving his technical and communication skills. He can
          be found at{' '}
          <Link
            href="https://twitter.com/gtliuu"
            isExternal
            color={twitterColor}
            _hover={{ textDecoration: 'underline' }}
          >
            Twitter
          </Link>
          ,{' '}
          <Link
            href="https://github.com/guitaoliu"
            isExternal
            color={githubColor}
            _hover={{ textDecoration: 'underline' }}
          >
            GitHub
          </Link>{' '}
          and{' '}
          <Link
            href="https://www.linkedin.com/in/guitaoliu/"
            isExternal
            color={linkedinColor}
            _hover={{ textDecoration: 'underline' }}
          >
            Linkedin
          </Link>
          . He is also reachable via{' '}
          <Link href="mailto:gtliu52@gmail.com" color={personalEmail}>
            Personal
          </Link>{' '}
          or{' '}
          <Link href="mailto:guitao.liu@uottawa.ca" color={schoolEmail}>
            School
          </Link>{' '}
          email.
        </Text>
      </VStack>
    </Flex>
  )
}

export default Profile
