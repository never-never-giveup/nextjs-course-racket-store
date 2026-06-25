import { getOneById } from '@/services/get-one-by-id'
import { Racket } from '@/types/racket'
import { GetOneResponse } from '@/types/get-one-response'

export const getRacketById = (id: string): GetOneResponse<{ product: Racket }> => {
  return getOneById<{ product: Racket }>('/product', id, true)
}
