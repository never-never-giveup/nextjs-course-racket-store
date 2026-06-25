import { Racket } from '@/types/racket'
import { GetManyResponse } from '@/types/get-many-response'
import { getMany } from '@/services/get-many'

export const getTop10 = async (): GetManyResponse<Racket> => {
  return getMany('/top-10', undefined, true) as GetManyResponse<Racket>
}
