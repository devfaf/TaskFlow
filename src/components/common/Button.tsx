import type { ButtonProps } from "../types/button"

const Button = ({ children, className, type, disabled, onClick }: ButtonProps) => {
  return (
      <button onClick={onClick} className={className} disabled={disabled} type={type}>
        {children}
      </button>
  )
}

export default Button