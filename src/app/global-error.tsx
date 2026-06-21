'use client'

import { ReactNode } from 'react'
import { ErrorPageProps } from '@/types/error-page-props'
import { Button } from '@/components/ui/button'

export default function GlobalError({ reset }: ErrorPageProps): ReactNode {
  return (
    <html>
      <body>
        <div>Something went wrong</div>
        <Button onClick={reset}>Try again</Button>
      </body>
    </html>
  )
}
