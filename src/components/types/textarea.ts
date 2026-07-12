export type TextAreaProps = {
    id?:string;
    value?:string;
    name?:string;
    className?:string;
    placeholder?:string;
    error?:string | null;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    // rows?:string;
    // cols?:string;
    // readonly?:boolean;
    // disabled?:boolean;
    // maxlength?:string;
    // minlength?:string;
}