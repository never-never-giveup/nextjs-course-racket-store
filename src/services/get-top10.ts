import { Racket } from '@/types/racket'
import { GetManyResponse } from '@/types/get-many-response'
import { getMany } from '@/services/get-many'

export const getTop10 = async (): GetManyResponse<Racket> => {
  return getMany('/top-10', undefined, {
    next: {
      tags: ['top-10'],
    },
  }) as GetManyResponse<Racket>
}
