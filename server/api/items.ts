import type { IncomingMessage, ServerResponse } from 'http'

export interface Items{
  id: number,
  name: string,
  price: string
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  const result: Items[] = await $fetch('http://localhost:3000/api/items')

  return result
}

