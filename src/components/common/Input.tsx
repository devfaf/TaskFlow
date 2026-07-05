import type { InputProps } from "../types/input"

const Input = ({ type = "text", id, name, required, className, placeholder, value, onChange, label, error }: InputProps) => {
  return (
    <div className="gap-2 flex flex-col">
      {
        label && <label>{label}</label>
      }
      <input type={type} id={id} name={name} required={required} className={className} placeholder={placeholder} value={value} onChange={onChange} />
      {
        error && <p>{error}</p>
      }
    </div>
  )
}

export default Input