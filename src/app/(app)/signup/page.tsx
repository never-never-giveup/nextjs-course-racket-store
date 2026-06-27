'use client'

import { FC } from 'react'
import { signupAction } from './signup-action'
import { LoginPwdForm } from '@/components/login-pwd-form'

const Signup: FC = () => <LoginPwdForm reducerAction={signupAction} buttonText="signup" />

export default Signup
