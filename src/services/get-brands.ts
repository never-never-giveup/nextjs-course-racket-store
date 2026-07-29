import { GetManyResponse } from '@/types/get-many-response'
import { Brand } from '@/types/brand'
import { getMany } from '@/services/get-many'

export const getBrands = (): GetManyResponse<Brand> => {
  return getMany('/brands') as GetManyResponse<Brand>
}
