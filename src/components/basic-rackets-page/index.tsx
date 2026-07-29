'use client'

import { ReactNode } from 'react'
import { RacketFilter } from '@/components/rackets-filter'
import { RacketsList } from '@/components/rackets-list'
import { useSearchParams } from 'next/navigation'
import useSwr from 'swr'
import { Brand } from '@/types/brand'
import { getRacketsClientSide } from '@/services/get-rackets-client-side'

import { RACKETS_PER_PAGE } from '@/constants/api'
import { Pagination } from '@/components/pagination'
import { parsePage } from '@/helpers/parse-page'

type Props = {
  brands: { id: number; name: string }[]
}

const onSelect = (brand: Brand | null) => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  if (brand === null) {
    urlSearchParams.delete('brand')
  } else {
    urlSearchParams.set('brand', brand.name)
  }

  urlSearchParams.delete('page')

  window.history.pushState(
    Object.fromEntries(urlSearchParams.entries()),
    '',
    urlSearchParams.size
      ? window.location.pathname + '?' + urlSearchParams.toString()
      : window.location.pathname
  )
}

const fetcher = async ([, { page, brand }]: [string, { page: number; brand?: string }]) => {
  const { data, isError } = await getRacketsClientSide({
    page,
    brand,
  })

  if (isError) {
    throw new Error('Failed to fetch rackets')
  }

  return data
}

export default function RacketsPage({ brands }: Props): ReactNode {
  const searchParams = useSearchParams()

  const page = parsePage(searchParams.get('page'))

  const brand = searchParams.get('brand')

  const { data, isLoading, error } = useSwr(['/api/products', { page, brand }], fetcher)

  if (error) {
    return 'swr error'
  }

  if (isLoading) {
    return 'Loading...'
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Ракетки</h1>

      {/* Main Two-Column Layout Split */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 items-start">
        <aside className="flex flex-col gap-4">
          <RacketFilter brands={brands} onSelect={onSelect} defaultBrandName={brand || undefined} />
        </aside>

        {/* RIGHT COLUMN */}
        <main className="flex justify-around flex-wrap">
          <RacketsList rackets={data ?? []} />
          <Pagination
            disablePrevious={page <= 1}
            disableNext={(data?.length ?? 0) < RACKETS_PER_PAGE}
          />
        </main>
      </div>
    </div>
  )
}
