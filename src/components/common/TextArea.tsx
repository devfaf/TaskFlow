import type { TextAreaProps } from "../types/textarea"

const TextArea = ({className, value, id, name, onChange, placeholder, error}: TextAreaProps) => {
  return (
    <div>
        <textarea value={value} className={className} name={name} id={id} onChange={onChange} placeholder={placeholder}></textarea>
        {
          error && <p className="text-red-500 text-sm duration-200">{error}</p>
        }
    </div>
  )
}

export default TextArea