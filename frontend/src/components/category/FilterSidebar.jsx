// "Shop by" checkbox groups. Options come from the products in the current category.
export default function FilterSidebar({ groups, selected, onToggle, onClear }) {
  const active = groups.some((group) => selected[group.key].length > 0)

  return (
    <div className="divide-y divide-neutral-200">
      {groups.map((group) => (
        <fieldset key={group.key} className="py-4 first:pt-0">
          <legend className="float-left mb-3 w-full text-sm font-bold">{group.label}</legend>
          <ul className="clear-both space-y-3">
            {group.options.map((option) => (
              <li key={option.id}>
                <label className="flex cursor-pointer items-center gap-2 text-[12.5px]">
                  <input type="checkbox" checked={selected[group.key].includes(option.id)} onChange={() => onToggle(group.key, option.id)} className="size-3.5 accent-black" />
                  <span className="flex-1">{option.title}</span>
                  <span className="text-neutral-500">{option.count}</span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      ))}
      {active && (
        <div className="pt-4">
          <button type="button" onClick={onClear} className="text-xs underline">Clear all filters</button>
        </div>
      )}
    </div>
  )
}
