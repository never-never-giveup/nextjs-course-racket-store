import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import { RacketContainer } from '@/components/racket/racket-container'
import { getMetadataRacketById } from '@/services/get-metadata-racket-by-id'

type Props = PageProps<'/rackets/[id]'>

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params
  const product = await getMetadataRacketById(id)
  if (!product.data) {
    return {}
  }

  return {
    title: product.data.product.name,
    description: product.data.product.description,
  }
}

export default async function RacketPage({ params }: Props): Promise<ReactNode> {
  const { id } = await params

  return (
    <Suspense fallback={<div>Loading racket page</div>}>
      <RacketContainer id={id} />
    </Suspense>
  )
}
