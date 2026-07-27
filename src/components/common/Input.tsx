import type { InputProps } from "../types/input"

const Input = ({
  type = "text",
  id,
  name,
  required,
  className = "",
  placeholder,
  value,
  onChange,
  label,
  icon,
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
      <div className="relative">
        {icon && (
          <span className="absolute text-xl right-2 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]">
            {icon}
          </span>
        )}
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          className={`${baseStyles} ${icon ? "pr-10" : ""} ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>

      {
        error && <p className="text-red-500 text-sm duration-200">{error}</p>
      }
    </div>
  )
}

export default Input