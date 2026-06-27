'use client'

import { FC, useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { BASE_API_URL } from '@/constants/api'

const handleLogout = async (): Promise<void> => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    method: 'DELETE',
    credentials: 'include',
  })

  window.location.assign(`/`)
}

const Logout: FC = () => {
  const [isPending, startTransition] = useTransition()

  return (
    <Button disabled={isPending} onClick={() => startTransition(handleLogout)}>
      logout
    </Button>
  )
}

export default Logout
