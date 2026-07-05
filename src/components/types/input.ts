export type InputProps = {
    type: 'search' | 'email' | 'password' | 'text';
    label?:string;
    id?: string;
    className?:string;
    name?: string;
    error?: string;
    required?: boolean;
    value?: "string" | "number" | "boolean";
    placeholder?:string;
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
    // minlength?: number;
    // maxlength?: number;
    // size?: number;
}