export type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger"
}