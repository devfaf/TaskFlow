import type { SelectProps } from "../types/select";
import { IoChevronDown } from "react-icons/io5";

const Select = ({
  options,
  className = "",
  id,
  name,
  onChange,
  value,
}: SelectProps) => {
const baseStyles =
  "w-full appearance-none cursor-pointer rounded-lg border border-[var(--color-border)] bg-white px-4 py-2 pl-10 text-sm text-[var(--color-text-primary)] outline-none transition-all duration-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]";

  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${baseStyles} ${className}`}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <IoChevronDown
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-base text-[var(--color-text-secondary)]"
      />
    </div>
  );
};

export default Select;