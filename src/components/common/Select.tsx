import type { SelectProps } from "../types/select"

const Select = ({className}: SelectProps) => {
  return (
    <div>
      <select name="filter" id="filter-dropdown" className={className}>
        <option value="">همه</option>
        <option value="">فعال</option>
        <option value="">تکمیل‌شده</option>
      </select>
    </div>
  )
}

export default Select