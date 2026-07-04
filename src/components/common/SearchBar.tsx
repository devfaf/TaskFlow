import type { Input } from "../types/input"

const SearchBar = ({type = "text", id, name, required, className}: Input) => {
  return (
    <div>
        <input type={type} id={id} name={name} required={required} className={className}/>
    </div>
  )
}

export default SearchBar