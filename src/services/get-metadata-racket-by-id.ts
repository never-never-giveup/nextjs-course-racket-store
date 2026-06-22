import { GetOneResponse } from '@/types/get-one-response'
import { Racket } from '@/types/racket'
import { getOneById } from '@/services/get-one-by-id'

export const getMetadataRacketById = (id: string): GetOneResponse<{ product: Racket }> => {
  return getOneById<{ product: Racket }>('/meta/product', id)
}
