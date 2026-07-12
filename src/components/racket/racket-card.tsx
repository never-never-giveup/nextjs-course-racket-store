'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { PropsWithChildren, useContext, FC } from 'react'
import { cn } from '@/lib/utils'
import { Racket } from '@/types/racket'
import { UserContext } from '@/providers/user'
import { ToggleFavoriteButton } from '@/components/toggle-favorite-button'
import { useHydrateFavorite } from '@/providers/favorites/hooks/use-hydrate-favorite'
import { useIsFavoriteById } from '@/providers/favorites/hooks/use-is-favorite-by-id'

type RacketCardProps = Pick<Racket, 'name' | 'imageUrl' | 'userData' | 'id'>

export const RacketCard: FC<PropsWithChildren<RacketCardProps>> = ({
  name,
  imageUrl,
  userData,
  id,
}) => {
  const user = useContext(UserContext)

  useHydrateFavorite({ id, isFavorite: userData?.isFavorite })

  const isFavorite = useIsFavoriteById({ id, isFavoriteInitial: userData?.isFavorite })

  return (
    <div className={cn('flex', 'flex-col', 'gap-3', 'group cursor-pointer', 'inline-block')}>
      <Card className="overflow-hidden border-zinc-200 rounded-xl bg-white shadow-none transition-all duration-200 hover:border-zinc-300 w-96">
        <CardHeader className="p-0 relative">
          {user && <ToggleFavoriteButton id={id} isFavorite={isFavorite} />}
        </CardHeader>
        <CardContent className="p-6 flex items-center justify-center aspect-3/4">
          <img
            src={imageUrl}
            alt={name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
          />
        </CardContent>
      </Card>

      <div className="text-sm font-medium text-muted-foreground px-1">{name}</div>
    </div>
  )
}
