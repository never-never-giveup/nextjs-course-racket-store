import { ReactNode, Suspense } from 'react'
import { getTop10 } from '@/services/get-top10'
import { RacketsSelectionContainer } from '@/components/rackets-selection-container'

export default async function Top10Page(): Promise<ReactNode> {
  return (
    <Suspense fallback={<div>Loading top 10</div>}>
      <RacketsSelectionContainer title="Top 10" getRackets={getTop10} />
    </Suspense>
  )
}
