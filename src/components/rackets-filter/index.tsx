const brands = ['All', 'Head', 'Yonex']

export const RacketFilter = () => (
  <>
    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Бренд</h3>
    <ul className="space-y-3 text-sm">
      {brands.map((brand) => (
        <li key={brand}>
          <button
            className={`text-left w-full ${brand === 'All' ? 'font-semibold' : 'text-muted-foreground'}`}
          >
            {brand}
          </button>
        </li>
      ))}
    </ul>
  </>
)
