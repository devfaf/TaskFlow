import type { InputProps } from "../types/input"

const Input = ({ type = "text", id, name, required, className, placeholder, value, onChange, label, error }: InputProps) => {
  return (
    <div className="w-full sm:max-w-[300px] gap-2 flex flex-col">
      {
        label && <label>{label}</label>
      }
      <input label={label} type={type} id={id} name={name} required={required} className={className} placeholder={placeholder} value={value} onChange={onChange} error={error} />
      {
        error && <p>{error}</p>
      }
    </div>
  )
}

export default Input