import type { ButtonProps } from "../types/button"

const Button = ({
  children,
  className,
  type = "button",
  disabled,
  onClick,
  variant = "primary" }:
  ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)]",

    secondary:
      "border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] hover:bg-gray-50",

    danger:
      "bg-[var(--color-danger)] text-white hover:opacity-90",
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      >
      {children}
    </button>
  )
}

export default Button