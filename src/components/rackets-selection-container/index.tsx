import { FC } from 'react'
import { GetManyResponse } from '@/types/get-many-response'
import { Racket } from '@/types/racket'
import { RacketSelectionItem } from '@/components/racket-selection-item'
import { Selection } from '@/components/selection'

type Props = {
  title: string
  getRackets: () => GetManyResponse<Racket>
  hrefToAll?: string
  className?: string
}

export const RacketsSelectionContainer: FC<Props> = async ({
  title,
  hrefToAll,
  className,
  getRackets,
}) => {
  const { isError, data: rackets } = await getRackets()

  if (isError) {
    return 'Error'
  }

  return (
    <Selection title={title} hrefToAll={hrefToAll} className={className}>
      {rackets.map((product) => (
        <RacketSelectionItem
          key={product.id}
          id={`${product.id}`}
          href={product.imageUrl}
          name={product.name}
        />
      ))}
    </Selection>
  )
}
