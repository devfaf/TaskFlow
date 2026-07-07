import type { SelectProps } from "../types/select"

const Select = ({ className, value, onChange, showAll=false }: SelectProps) => {
  return (
    <div>
      <select
        name="status"
        id="status"
        className={className}
        value={value}
        onChange={onChange}
        >
          {
              showAll &&
              <option value="all">همه</option>
          }
        <option value="active">فعال</option>
        <option value="completed">تکمیل‌شده</option>
      </select>
    </div>
  )
}

export default Select