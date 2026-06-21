import './globals.css'
import { FC } from 'react'
import { cn } from '@/lib/utils'
import { Geist } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const RootLayout: FC<LayoutProps<'/'>> = ({ children }) => (
  <html lang="en" className={cn('font-sans', geist.variable)}>
    <body className="w-dvw">
      <NextTopLoader />
      {children}
    </body>
  </html>
)

export default RootLayout
