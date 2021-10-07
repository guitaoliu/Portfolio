import { useMemo, useState } from 'react'
import {
  HStack,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Text,
} from '@chakra-ui/react'
import type { LeetCodeSolution } from '../../lib/notion'
import LeetCodeItem from './item'

type LeetCodeTableProps = {
  solutions: LeetCodeSolution[]
}
const LeetCodeTable = ({ solutions }: LeetCodeTableProps) => {
  const [page, setPage] = useState<number>(0)

  solutions.sort((a, b) => b.number - a.number)
  const ranges = useMemo<string[]>(() => {
    const maxNumber = Math.ceil(solutions[0].number / 100)
    const ranges = new Array<string>(maxNumber + 1)
    for (let i = 0; i < maxNumber; i++) {
      ranges[i] = `${i * 100 + 1}~${(i + 1) * 100}`
    }
    return ranges
  }, [solutions])

  return (
    <VStack>
      <HStack>
        <Text>Problems: </Text>
        {ranges.map((range, index) => (
          <Text
            key={index}
            textDecoration={index === page ? 'underline' : ''}
            onClick={() => {
              setPage(index)
            }}
          >
            {range}
          </Text>
        ))}
      </HStack>
      <Table size="sm" m="auto">
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
            <LeetCodeItem key={s.id} leetCodeSolution={s} page={page} />
          ))}
        </Tbody>
      </Table>
    </VStack>
  )
}

export default LeetCodeTable
