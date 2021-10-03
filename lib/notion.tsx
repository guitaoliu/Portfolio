import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID || '111'

export type LeetCodeSolution = {
  id: string
  name: string
  number: number
  date: string
  tags: Tag[]
  difficulty: string
  url: string
}

type Tag = {
  id: string
  name: string
  color: string
}

export const getLeetCodeSolutions = async (): Promise<LeetCodeSolution[]> => {
  let solutions = []
  let cursor: string = ''
  while (true) {
    const { results, next_cursor } = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor === '' ? undefined : cursor,
    })
    solutions.push(...results)
    if (!next_cursor) {
      break
    }
    cursor = next_cursor
  }
  return solutions.map((solution) => ({
    id: solution.id,
    name: (solution.properties['Name'] as any).title[0].text.content,
    number: (solution.properties['No.'] as any).number,
    date: (solution.properties['Date'] as any).date?.start || '',
    tags: (solution.properties['Tags'] as any).multi_select,
    difficulty: (solution.properties['Difficulty'] as any).select?.name || '',
    url: solution.url,
  }))
}
