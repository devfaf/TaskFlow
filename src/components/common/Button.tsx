import type { ButtonProps } from "../types/button"

const Button = ({ children, className, type, disabled, onClick }: ButtonProps) => {
  return (
    <div className="w-full">
      <button onClick={onClick} className={className} disabled={disabled} type={type}>
        {children}
      </button>
    </div>
  )
}

export default Button