'use server'
import { BASE_API_URL } from '@/constants/api'
import { cookies } from 'next/headers'
import { parseSetCookie } from '@/helpers/parse-set-cookie'

export const signupAction = async (state, formData: FormData) => {
  const login = formData.get('login')
  const password = formData.get('password')

  const result = await fetch(`${BASE_API_URL}/auth/signup`, {
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
    const { error } = await result.json()
    return {
      error: error ?? 'Signup failed.', // Not the best practice to expose raw error, but for the sake of HW simplicity...
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
