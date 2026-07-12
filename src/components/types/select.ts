export type SelectProps = {
    value?:
    | "all"
    | "active"
    | "completed";
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    showAll?: boolean;
}