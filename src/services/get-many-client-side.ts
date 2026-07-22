import { GetManyResponse } from '@/types/get-many-response'
import { BASE_API_URL } from '@/constants/api'

export const getManyClientSide = async <T>(
  path: string,
  queryParams?: Record<string, string>,
  authenticated = false
): GetManyResponse<T> => {
  const response = await fetch(
    `${BASE_API_URL}${path}${queryParams ? '?' + new URLSearchParams(queryParams).toString() : ''}`,
    {
      credentials: authenticated ? 'include' : undefined,
    }
  )

  if (!response.ok) {
    return {
      isError: true,
      data: undefined,
    }
  }

  const data = (await response.json()) as T[]

  return {
    isError: false,
    data,
  }
}
