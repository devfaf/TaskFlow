import type { TaskCardProps } from "../../types/task"
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const TaskCard = ({ id, title, status, className, children, description, date }: TaskCardProps) => {
  return (
    <div className={`
        rounded-xl
        border
        border-[var(--color-border)]
        bg-white
        p-4
        transition-all
        duration-200
        ${className}
      `}>

      <div className="flex flex-col items-start justify-between gap-2 w-full relative">
        <div className="space-y-2 flex-1 mb-2">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
            {title}
          </h2>
          <p>{description}</p>
          <p>{date}</p>
        </div>
        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-medium
            ${status === "todo"
              ? "bg-[var(--color-danger-soft)] text-[var(--color-danger)]"
              : status === "inProgress" ? "bg-[var(--color-warning-soft)] text-[var(--color-warning)]"
                : status === "review" ? "bg-[var(--color-danger-soft)] text-[var(--color-danger)]"
                  : status === "done" ? "bg-[var(--color-info-soft)] text-[var(--color-info)]" : "bg-[var(--color-success-soft)] text-[var(--color-success)]"
            }
          `}
        >
          {status === "todo" ? "فعال" : "تکمیل شده"}
        </span>
        <button className="absolute left-0 top-0 hover:bg-[var(--color-hover)] rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200">
          <PiDotsThreeVerticalBold className="text-lg" />
        </button>
        <span>Task Number: {id}</span>
        {children}

      </div>
    </div>
  )
}

export default TaskCard