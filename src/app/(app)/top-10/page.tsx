import { ReactNode, Suspense } from 'react'
import { getTop10 } from '@/services/get-top10'
import { RacketsSelectionContainer } from '@/components/rackets-selection-container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ТОП-10 ракеток',
  description: 'Самые популярные ракетки',
}

export default async function Top10Page(): Promise<ReactNode> {
  return (
    <Suspense fallback={<div>Loading top 10</div>}>
      <RacketsSelectionContainer title="Top 10" getRackets={getTop10} />
    </Suspense>
  )
}
