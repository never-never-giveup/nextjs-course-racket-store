import { GetOneResponse } from '@/types/get-one-response'
import { BASE_API_URL } from '@/constants/api'
import { cookies } from 'next/headers'

export const getOneById = async <T>(
  path: string,
  id: string,
  authenticated = false
): GetOneResponse<T> => {
  let cookieStore: Awaited<ReturnType<typeof cookies>> | undefined

  if (authenticated) {
    cookieStore = await cookies()
  }

  const response = await fetch(`${BASE_API_URL}${path}/${id}`, {
    headers: cookieStore
      ? {
          Cookie: cookieStore.toString(),
        }
      : {},
  })

  if (response.status === 404) {
    return {
      isError: false,
    }
  }

  if (!response.ok) {
    return {
      isError: true,
    }
  }

  const data = (await response.json()) as T

  return {
    isError: false,
    data,
  }
}
