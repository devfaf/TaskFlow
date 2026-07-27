import type { InputProps } from "../types/input"

const Input = ({ 
  type = "text", 
  id, 
  name, 
  required, 
  className="", 
  placeholder, 
  value, 
  onChange, 
  label, 
  error }: InputProps) => {

  const baseStyles =
    "w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-1 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] outline-none transition-all duration-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70";

  return (
    <div className="gap-2 flex flex-col">
      {
        label && <label 
        htmlFor={id}
        className="text-sm font-medium text-[var(--color-text-primary)]"
        >{label}</label>
      }
      <input 
      type={type} 
      id={id} 
      name={name} 
      required={required} 
      className={`${baseStyles} 
      ${className}`}
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} />
      {
        error && <p className="text-red-500 text-sm duration-200">{error}</p>
      }
    </div>
  )
}

export default Input