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
  let cursor = undefined
  while (true) {
    const { results, next_cursor } = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
    })
    solutions.push(...results)
    if (!next_cursor) {
      break
    }
    cursor = next_cursor
  }
  return solutions.map((solution) => ({
    id: solution.id,
    name: solution.properties['Name'].title[0].text.content,
    number: solution.properties['No.'].number,
    date: solution.properties['Date'].date?.start || '',
    tags: solution.properties['Tags'].multi_select,
    difficulty: solution.properties['Difficulty'].select?.name || '',
    url: solution.url,
  }))
}
