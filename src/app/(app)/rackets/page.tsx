import { ReactNode } from 'react'
import GeneralRacketsPage from '@/components/basic-rackets-page'
import { getRackets } from '@/services/get-rackets'
import { Metadata } from 'next'
import { getBrands } from '@/services/get-brands'
import { SWRConfig, unstable_serialize } from 'swr'
import { RACKETS_PER_PAGE } from '@/constants/api'
import { parsePage } from '@/helpers/parse-page'

export const metadata: Metadata = {
  title: 'Ракетки',
  description: 'Все ракетки в магазине',
}

export default async function RacketsPage({
  searchParams,
}: PageProps<'/rackets'>): Promise<ReactNode> {
  const { brand, page: pageAsString } = (await searchParams) as { brand?: string; page?: string }

  const page = parsePage(pageAsString)

  const [{ isError: isErrorRackets, data: rackets }, { isError: isErrorBrands, data: brands }] =
    await Promise.all([getRackets(RACKETS_PER_PAGE, page, brand), getBrands()])
  if (isErrorRackets || isErrorBrands) {
    // TODO: do normal error handling
    throw new Error('Error during data fetch')
  }

  return (
    <SWRConfig
      value={{
        fallback: {
          [unstable_serialize(['/api/products', { page, brand: brand || null }])]: rackets,
        },
        revalidateIfStale: false,
        revalidateOnFocus: false,
      }}
    >
      <GeneralRacketsPage brands={brands} />
    </SWRConfig>
  )
}
