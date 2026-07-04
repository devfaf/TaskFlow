import type { InputProps } from "../types/input"

const SearchBar = ({type = "text", id, name, required, className}: InputProps) => {
  return (
    <div>
        <input type={type} id={id} name={name} required={required} className={className}/>
    </div>
  )
}

export default SearchBar