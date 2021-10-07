import { HStack, Text, Td, Tr, Link } from '@chakra-ui/react'
import type { LeetCodeSolution } from '../../lib/notion'

type ItemProps = {
  page: number
  leetCodeSolution: LeetCodeSolution
}
const LeetCodeItem = ({ leetCodeSolution, page }: ItemProps) => {
  const { id, number, url, name, difficulty, tags } = leetCodeSolution
  return (
    <Tr
      key={id}
      display={
        page * 100 + 1 <= number && number <= (page + 1) * 100
          ? 'table-row'
          : 'none'
      }
    >
      <Td isNumeric>{number}</Td>
      <Td>
        {
          <Link
            href={url.replace('www.notion.so', 'gtliu52.notion.site')}
            textDecoration="underline"
            isExternal
          >
            {name}
          </Link>
        }
      </Td>
      <Td>{difficulty}</Td>
      <Td>
        {tags.map((tag) => (
          <HStack key={tag.id}>
            <Text p={1}>{tag.name}</Text>
          </HStack>
        ))}
      </Td>
    </Tr>
  )
}

export default LeetCodeItem
