import { Racket } from '@/types/racket'
import { useFavoritesContext } from '@/providers/favorites'

type Params = {
  id: Racket['id']
  isFavoriteInitial?: boolean
}

export const useIsFavoriteById = ({ id, isFavoriteInitial }: Params): boolean => {
  const { favorites } = useFavoritesContext()

  const isFavorite = favorites[id] ?? null

  return Boolean(isFavorite ?? isFavoriteInitial)
}
