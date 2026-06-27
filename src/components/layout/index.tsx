import { FC, PropsWithChildren } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { UserContext } from '@/providers/user'
import { getUser } from '@/services/get-user'

export const Layout: FC<PropsWithChildren> = async ({ children }) => {
  const { data } = await getUser()
  return (
    <UserContext value={data?.user ?? null}>
      <Header />

      {/* MAIN CONTAINER */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-8 py-12">{children}</div>

      {/* FOOTER */}

      <Footer />
    </UserContext>
  )
}
