import { BASE_API_URL } from '@/constants/api'
import { GetManyResponse } from '@/types/get-many-response'
import { cookies } from 'next/headers'

export const getMany = async <T>(
  path: string,
  queryParams?: Record<string, string>,
  fetchParams?: Parameters<typeof fetch>[1],
  authenticated = false
): GetManyResponse<T> => {
  let cookieStore: Awaited<ReturnType<typeof cookies>> | undefined

  if (authenticated) {
    cookieStore = await cookies()
  }

  const response = await fetch(
    `${BASE_API_URL}${path}${queryParams ? '?' + new URLSearchParams(queryParams).toString() : ''}`,
    cookieStore ? { ...fetchParams, headers: {(...fetchParams.headers ?? {}), Cookie }}
    fetchParams
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
