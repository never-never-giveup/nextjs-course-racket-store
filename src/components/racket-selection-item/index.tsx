import { RacketCard } from '@/components/racket/racket-card'
import Link from 'next/link'
import { Racket } from '@/types/racket'
import { FC } from 'react'

type Props = {
  id: Racket['id']
  href: string
  name: string
  userData: Racket['userData']
}

export const RacketSelectionItem: FC<Props> = ({ id, href, name, userData }) => (
  <Link href={`/rackets/${id}`} prefetch={false}>
    <RacketCard name={name} imageUrl={href} userData={userData} id={id} />
  </Link>
)
