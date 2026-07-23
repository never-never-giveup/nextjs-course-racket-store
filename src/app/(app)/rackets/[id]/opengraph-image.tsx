import { FC } from 'react'
import { getRacketById } from '@/services/get-racket-by-id'
import { Racket } from '@/types/racket'
import { ImageResponse } from 'next/og'

type Props = {
  racket: Racket
}

type OGImageComponent = (
  props: Parameters<FC<PageProps<'/rackets/[id]'>>>[0]
) => Promise<ImageResponse>

const InternalImage: FC<Props> = ({ racket }) => (
  <div style={{ display: 'flex' }}>
    <img src={racket.imageUrl} style={{ width: '300px', height: '300px' }} alt={racket.name} />
    <div>{racket.name}</div>
  </div>
)

const OGImage: OGImageComponent = async ({ params }) => {
  const { id } = await params

  const { data } = await getRacketById(id)

  if (!data) {
    return new ImageResponse(<div>Image not found</div>)
  }

  return new ImageResponse(<InternalImage racket={data.product} />, { width: 1200, height: 630 })
}

export default OGImage
