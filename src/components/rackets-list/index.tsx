import { FC } from 'react'
import Link from 'next/link'
import { RacketCard } from '@/components/racket/racket-card'

type Props = {
  rackets: {
    name: string
    id: number
    imageUrl: string
  }[]
}

export const RacketsList: FC<Props> = ({ rackets }) => {
  return (
    <>
      {rackets.map((racket) => (
        <Link key={racket.id} href={`/rackets/${racket.id}`} className="m-3" prefetch={false}>
          <RacketCard name={racket.name} imageUrl={racket.imageUrl} />
        </Link>
      ))}
    </>
  )
}
