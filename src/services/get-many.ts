import { BASE_API_URL } from '@/constants/api'
import { GetManyResponse } from '@/types/get-many-response'
import { cookies } from 'next/headers'

export const getMany = async <T>(
  path: string,
  queryParams?: Record<string, string>,
  authenticated = false
): GetManyResponse<T> => {
  let cookieStore: Awaited<ReturnType<typeof cookies>> | undefined

  if (authenticated) {
    cookieStore = await cookies()
  }

  const response = await fetch(
    `${BASE_API_URL}${path}${queryParams ? '?' + new URLSearchParams(queryParams).toString() : ''}`,
    {
      headers: cookieStore
        ? {
            Cookie: cookieStore.toString(),
          }
        : {},
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
