import { Racket } from '@/types/racket'
import { GetManyResponse } from '@/types/get-many-response'
import { getMany } from '@/services/get-many'

export const getRackets = async (
  limit = 10,
  page = 1,
  brand?: string | null
): GetManyResponse<Racket> => {
  const queryParams: Record<'limit' | 'page', string> & { brand?: string } = {
    limit: String(limit),
    page: String(page),
  }

  if (brand) {
    queryParams['brand'] = brand
  }

  return getMany('/products', queryParams, undefined, true) as GetManyResponse<Racket>
}
