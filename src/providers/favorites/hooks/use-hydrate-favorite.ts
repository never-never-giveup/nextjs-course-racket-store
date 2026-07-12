import { Racket } from '@/types/racket'
import { useEffect } from 'react'
import { useFavoritesContext } from '@/providers/favorites'

type Params = {
  id: Racket['id']
  isFavorite?: boolean
}
export const useHydrateFavorite = ({ id, isFavorite }: Params) => {
  const { setFavorite } = useFavoritesContext()
  useEffect(() => {
    if (typeof isFavorite === 'boolean') {
      setFavorite({
        id,
        isFavorite,
      })
    }
  }, [setFavorite, isFavorite, id])
}
