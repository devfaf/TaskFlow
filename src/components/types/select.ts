export type SelectOption = {
    value: string;
    label: string;
}

export type SelectProps = {
    options: SelectOption[];
    value?: string;
    className?: string;
    id?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
