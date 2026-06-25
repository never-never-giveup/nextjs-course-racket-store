'use client'

import { FC, useActionState, useEffect } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { signupAction } from './signup-action'

const Signup: FC = () => {
  const [state, formAction, isPending] = useActionState(signupAction, { redirectTo: '' })

  const { error, redirectTo } = state

  useEffect(() => {
    if (redirectTo) {
      window.location.assign(redirectTo)
    }
  }, [redirectTo])

  return (
    <form action={formAction}>
      <div>
        <Label htmlFor="login">Login:</Label>
        <Input name="login" required />
      </div>
      <div>
        <Label htmlFor="password">Password:</Label>
        <Input name="password" type="password" required />
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Button disabled={isPending}>signup</Button>
    </form>
  )
}

export default Signup
