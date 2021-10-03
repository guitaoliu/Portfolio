import {
  HStack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
} from '@chakra-ui/react'
import { LeetCodeSolution } from '../../lib/notion'

type LeetCodeTableProps = {
  solutions: LeetCodeSolution[]
}

const LeetCodeTable = ({ solutions }: LeetCodeTableProps) => {
  solutions.sort((a, b) => b.number - a.number)
  return (
    <Table size="sm" w="2/3" m="auto">
      <Thead>
        <Tr>
          <Th>Number</Th>
          <Th>Name</Th>
          <Th>Difficult</Th>
          <Th>Tags</Th>
        </Tr>
      </Thead>
      <Tbody>
        {solutions.map((s: LeetCodeSolution) => (
          <Tr key={s.id}>
            <Td isNumeric>{s.number}</Td>
            <Td>
              {
                <Link
                  href={s.url.replace('www.notion.so', 'gtliu52.notion.site')}
                  textDecoration="underline"
                  isExternal
                >
                  {s.name}
                </Link>
              }
            </Td>
            <Td>{s.difficulty}</Td>
            <Td>
              {s.tags.map((tag) => (
                <HStack key={tag.id}>
                  <Text p={1}>{tag.name}</Text>
                </HStack>
              ))}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default LeetCodeTable
