import { revalidateTag } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const { tag } = await req.json()

  revalidateTag(tag, { expire: 0 })

  return Response.json({ revalidated: true, tag })
}
