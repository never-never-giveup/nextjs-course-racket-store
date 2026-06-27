'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { PropsWithChildren, useContext } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import { Racket } from '@/types/racket'
import { UserContext } from '@/providers/user'

type RacketCardProps = Pick<Racket, 'name' | 'imageUrl' | 'userData'>

export const RacketCard: React.FC<PropsWithChildren<RacketCardProps>> = ({
  name,
  imageUrl,
  userData,
}) => {
  const user = useContext(UserContext)

  return (
    <div className={cn('flex', 'flex-col', 'gap-3', 'group cursor-pointer', 'inline-block')}>
      <Card className="overflow-hidden border-zinc-200 rounded-xl bg-white shadow-none transition-all duration-200 hover:border-zinc-300 w-96">
        <CardHeader className="p-0 relative">
          {user && (
            <Button
              variant="outline"
              size="icon"
              className="absolute top-3 right-3 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white text-gray-700 hover:text-red-600"
              aria-label="Add to favorites"
              onClick={() => console.log('Added to favorites')}
            >
              <Heart
                className={cn(
                  'h-4',
                  'w-4',
                  { 'text-red-500': userData?.isFavorite },
                  { 'fill-red-500': userData?.isFavorite }
                )}
              />
            </Button>
          )}
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
