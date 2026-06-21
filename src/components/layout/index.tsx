import { FC, PropsWithChildren } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />

    {/* MAIN CONTAINER */}
    <div className="flex-1 max-w-7xl w-full mx-auto px-8 py-12">{children}</div>

    {/* FOOTER */}

    <Footer />
  </>
)
