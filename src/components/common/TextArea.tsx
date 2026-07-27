import type { TextAreaProps } from "../types/textarea";

const TextArea = ({
  className = "",
  value,
  id,
  name,
  onChange,
  placeholder,
  error,
  rows = 5,
  label,
}: TextAreaProps) => {
  const baseStyles =
    "w-full resize-none rounded-lg border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] outline-none transition-all duration-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70";

  return (
    <div className="flex flex-col gap-2">
      {
        label &&
        <label
          htmlFor={id}
          className="text-sm font-medium text-[var(--color-text-primary)]">
          {label}
        </label>
      }

      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${baseStyles} ${className}`}
      />

      {error && (
        <p className="text-sm text-[var(--color-danger)]">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;