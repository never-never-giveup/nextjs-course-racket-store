'use client'

import { FC } from 'react'

import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useSearchParams } from 'next/navigation'
import { parsePage } from '@/helpers/parse-page'

type Props = {
  disablePrevious: boolean
  disableNext: boolean
}

const setPage = (page: number) => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  urlSearchParams.set('page', String(page))
  window.history.pushState(
    Object.fromEntries(urlSearchParams.entries()),
    '',
    window.location.pathname + '?' + urlSearchParams.toString()
  )
}

export const Pagination: FC<Props> = ({ disableNext, disablePrevious }) => {
  const searchParams = useSearchParams()
  const page = parsePage(searchParams.get('page'))

  return (
    <UIPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious disabled={disablePrevious} onClick={() => setPage(page - 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext disabled={disableNext} onClick={() => setPage(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  )
}
