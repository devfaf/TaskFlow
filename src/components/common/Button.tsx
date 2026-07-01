type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, className, type, disabled, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled} type={type}>
      {children}
    </button>
  )
}

export default Button