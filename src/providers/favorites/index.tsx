'use client'
import { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react'
import { Racket } from '@/types/racket'

type SetFavoriteParams = {
  id: Racket['id']
  isFavorite: boolean
}

type ContextType = {
  favorites: Record<Racket['id'], boolean>
  setFavorite: (params: SetFavoriteParams) => void
}

const FavoritesContext = createContext<ContextType | undefined>(undefined)

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavoritesContext must be used within a FavoritesProvider')
  }
  return context
}

export const FavoritesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<Record<Racket['id'], boolean>>({})

  const setFavorite: ContextType['setFavorite'] = useCallback(
    ({ isFavorite, id }) => {
      setFavorites((prevState) => {
        if (prevState[id] === isFavorite) {
          return prevState
        }

        return {
          ...prevState,
          [id]: isFavorite,
        }
      })
    },
    [setFavorites]
  )

  return (
    <FavoritesContext
      value={{
        favorites,
        setFavorite,
      }}
    >
      {children}
    </FavoritesContext>
  )
}
