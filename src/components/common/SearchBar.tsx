type InputProps = {
    type: 'search' | 'email' | 'password' | 'text';
    id?:string;
    name?:string;
    required?:boolean;
    minlength?:number;
    maxlength?:number;
    size?:number;
}
const SearchBar = ({type = "text", id, name, required, minlength, maxlength, size}: InputProps) => {
  return (
    <div>
        <input type={type} id={id} name={name} required={required} minLength={minlength} maxLength={maxlength} size={size} />
    </div>
  )
}

export default SearchBar