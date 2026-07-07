import type { TextAreaProps } from "../types/textarea"

const TextArea = ({className, value, id, name, onChange, placeholder}: TextAreaProps) => {
  return (
    <div>
        <textarea value={value} className={className} name={name} id={id} onChange={onChange} placeholder={placeholder}></textarea>
    </div>
  )
}

export default TextArea