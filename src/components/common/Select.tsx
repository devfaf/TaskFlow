import type { SelectProps } from "../types/select"

const Select = ({ options, className, id, name, onChange, value }: SelectProps) => {
  return (
    <div>
      <select
        name={name}
        id={id}
        className={className}
        onChange={onChange}
        value={value}
        >
          {
            options && options.map((option) => {
              return <option key={option.value} value={option.value}>{option.label}</option>
            })
          }
      </select>
    </div>
  )
}

export default Select