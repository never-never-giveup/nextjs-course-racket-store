import { FC, MouseEvent, useOptimistic, useTransition } from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { BASE_API_URL } from '@/constants/api'
import { useFavoritesContext } from '@/providers/favorites'

type Props = {
  isFavorite: boolean
  id: number
}

const toggleFavorite = async ({ isFavorite, id }: Props): Promise<Response> => {
  const url = `${BASE_API_URL}/product/${id}/favorite`

  const method = isFavorite ? 'DELETE' : 'POST'

  return fetch(url, {
    method,
    credentials: 'include',
  })
}

export const ToggleFavoriteButton: FC<Props> = ({ isFavorite, id }) => {
  const { setFavorite } = useFavoritesContext()

  const [isPending, startTransition] = useTransition()

  const [isFavoriteOptimistic, setIsfavoriteOptimistic] = useOptimistic(isFavorite)

  const handleFavorite = async () => {
    const nextIsFavorite = !isFavorite
    setIsfavoriteOptimistic(nextIsFavorite)
    try {
      const { ok } = await toggleFavorite({
        id,
        isFavorite,
      })
      if (ok) {
        setFavorite({
          id,
          isFavorite: nextIsFavorite,
        })
      }
    } catch (e) {
      console.log('Error during handling favorite occurred', e)
    }
  }

  const handleClick = async (event: MouseEvent) => {
    event.nativeEvent.stopImmediatePropagation()
    event.preventDefault()
    startTransition(handleFavorite)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="absolute top-3 right-3 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white text-gray-700 hover:text-red-600"
      aria-label="Add to favorites"
      disabled={isPending}
      onClick={handleClick}
    >
      <Heart
        className={cn(
          'h-4',
          'w-4',
          { 'text-red-500': isFavoriteOptimistic },
          { 'fill-red-500': isFavoriteOptimistic }
        )}
      />
    </Button>
  )
}
