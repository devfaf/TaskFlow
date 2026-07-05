import type { TextAreaProps } from "../types/textarea"

const TextArea = ({className, id, name, onChange, placeholder}: TextAreaProps) => {
  return (
    <div>
        <textarea className={className} name={name} id={id} onChange={onChange} placeholder={placeholder}></textarea>
    </div>
  )
}

export default TextArea