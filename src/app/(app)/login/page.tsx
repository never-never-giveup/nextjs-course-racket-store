'use client'

import { FC } from 'react'
import { loginAction } from '@/app/(app)/login/login-action'
import { LoginPwdForm } from '@/components/login-pwd-form'

const Login: FC = () => <LoginPwdForm reducerAction={loginAction} buttonText="login" />

export default Login
