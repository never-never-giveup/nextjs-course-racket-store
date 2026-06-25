import { RacketCard } from '@/components/racket/racket-card'
import Link from 'next/link'
import { Racket } from '@/types/racket'

type Props = {
  id: string
  href: string
  name: string
  userData: Racket['userData']
}

export const RacketSelectionItem: React.FC<Props> = ({ id, href, name, userData }) => (
  <Link href={`/rackets/${id}`}>
    <RacketCard name={name} imageUrl={href} userData={userData} />
  </Link>
)
