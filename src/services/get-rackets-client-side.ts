import { GetManyResponse } from '@/types/get-many-response'
import { Racket } from '@/types/racket'
import { getManyClientSide } from '@/services/get-many-client-side'

export const getRacketsClientSide = ({
  limit = 10,
  page = 1,
  brand = null,
}: Partial<{
  limit: number
  page: number
  brand: string | null
}>): GetManyResponse<Racket> => {
  const queryParams: Record<'limit' | 'page', string> & { brand?: string } = {
    limit: String(limit),
    page: String(page),
  }

  if (brand) {
    queryParams['brand'] = brand
  }

  return getManyClientSide<Racket>('/products', queryParams, true)
}
