import { Racket } from '@/types/racket'
import { GetManyResponse } from '@/types/get-many-response'
import { getMany } from '@/services/get-many'

export const getRackets = async (limit: number = 10): GetManyResponse<Racket> => {
  return getMany(
    '/products',
    {
      limit: `${limit}`,
    },
    true
  ) as GetManyResponse<Racket>
}
