'use client'
import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { ErrorPageProps } from '@/types/error-page-props'

export default function ErrorPage({ reset }: ErrorPageProps): ReactNode {
  return (
    <div>
      <p>Something went wrong</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
