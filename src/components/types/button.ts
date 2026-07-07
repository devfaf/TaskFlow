export type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset" | "text";
    disabled?: boolean;
    onClick?: () => void;
}