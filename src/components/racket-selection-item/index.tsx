import { RacketCard } from '@/components/racket/racket-card'
import Link from 'next/link'

type Props = {
  id: string
  href: string
  name: string
}

export const RacketSelectionItem: React.FC<Props> = ({ id, href, name }) => (
  <Link href={`/rackets/${id}`}>
    <RacketCard name={name} imageUrl={href} />
  </Link>
)
