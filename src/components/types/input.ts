export type InputProps = {
    type: 'search' | 'email' | 'password' | 'text';
    id?: string;
    className?:string;
    name?: string;
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    size?: number;
}