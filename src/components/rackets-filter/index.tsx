import { Brand } from '@/types/brand'
import { FC } from 'react'
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox'

type Props = {
  brands: Brand[]
  onSelect: (brand: Brand | null) => void
  defaultBrandName?: string
}

export const RacketFilter: FC<Props> = ({ brands, onSelect, defaultBrandName }) => {
  return (
    <>
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        Бренд
      </h3>
      <Combobox
        items={brands}
        onValueChange={(value: Brand['name'] | null) => {
          if (value === null) {
            return onSelect(value)
          }
          const brand = brands.find(({ name }) => name === value)!
          return onSelect(brand)
        }}
        defaultValue={defaultBrandName}
      >
        <ComboboxInput placeholder="Select a brand" showClear />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(brand: Brand) => (
              <ComboboxItem key={brand.id} value={brand.name}>
                {brand.name}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </>
  )
}
