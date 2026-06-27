import { FC, useActionState, useEffect } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type State = { error: string } | { redirectTo: string }

type Props = {
  reducerAction: (state: State, formData: FormData) => Promise<State>
  buttonText: string
}

export const LoginPwdForm: FC<Props> = ({ reducerAction, buttonText }) => {
  const [state, formAction, isPending] = useActionState(reducerAction, {} as State)

  const redirectTo = 'redirectTo' in state ? state.redirectTo : undefined

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

      {'error' in state && <div style={{ color: 'red' }}>{state.error}</div>}
      <Button disabled={isPending}>{buttonText}</Button>
    </form>
  )
}
