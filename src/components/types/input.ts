export type InputProps = {
    type: 
    | 'search' 
    | 'email' 
    | 'password' 
    | 'text' 
    | 'checkbox';
    label?:string;
    disabled?: boolean;
    id?: string;
    className?:string;
    name?: string;
    error?: string | null;
    required?: boolean;
    value?: string;
    placeholder?:string;
    icon?:React.ReactNode;
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
}