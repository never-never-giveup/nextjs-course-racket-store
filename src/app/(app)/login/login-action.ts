'use server'
import { BASE_API_URL } from '@/constants/api'
import { cookies } from 'next/headers'
import { parseSetCookie } from '@/helpers/parse-set-cookie'

export const loginAction = async (
  state: { error: string } | { redirectTo: string },
  formData: FormData
) => {
  const login = formData.get('login')
  const password = formData.get('password')

  const result = await fetch(`${BASE_API_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      login,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (result.status !== 200) {
    return {
      error: 'Login failed.',
    }
  }

  const cookieStore = await cookies()

  const setCookieHeader = result.headers.getSetCookie()

  if (setCookieHeader) {
    const parsed = parseSetCookie(setCookieHeader)
    for (const cookie of parsed) {
      cookieStore.set(cookie.name, cookie.value, cookie.options)
    }
  }
  return {
    redirectTo: '/',
  }
}
