import type { SearchBar } from "../types/search"

type InputProps = {
    type: 'search' | 'email' | 'password' | 'text';
    id?:string;
    name?:string;
    required?:boolean;
    className?:string;
}
const SearchBar = ({type = "text", id, name, required, className}: InputProps) => {
  return (
    <div>
        <input type={type} id={id} name={name} required={required} className={`bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2`} />
    </div>
  )
}

export default SearchBar