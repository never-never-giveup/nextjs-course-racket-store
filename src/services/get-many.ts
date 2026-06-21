import { BASE_API_URL } from '@/constants/api'
import { GetManyResponse } from '@/types/get-many-response'

export const getMany = async <T>(
  path: string,
  queryParams?: Record<string, string>
): GetManyResponse<T> => {
  const response = await fetch(
    `${BASE_API_URL}${path}${queryParams ? '?' + new URLSearchParams(queryParams).toString() : ''}`
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
