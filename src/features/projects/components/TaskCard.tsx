import { useState } from "react";
import type { TaskCardProps } from "../../types/task"
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const TaskCard = ({ id, title, status, className, children, description, date }: TaskCardProps) => {

  const [isMoreOptionOpen, setIsMoreOptionOpen] = useState(false);

  const moreOptionsHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setIsMoreOptionOpen((prev) => !prev)
  }

  return (
    <div className={`
        rounded-xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-4
        transition-all
        duration-200
        ${className}
      `}>

      <div className="flex flex-col items-start justify-between gap-2 w-full relative">
        <div className="space-y-2 flex-1 mb-2 w-full">

          <h2 className="text-lg font-semibold text-[var(--color-text-primary)] min-w-0 truncate pl-6">
            {title}
          </h2>

          <p className="text-sm text-[var(--color-text-secondary)] truncate">
            {description}
          </p>

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
                : status === "review" ? "bg-[var(--color-info-soft)] text-[var(--color-info)]"
                  : status === "done" ? "bg-[var(--color-success-soft)] text-[var(--color-success)]" : "bg-[var(--color-success-soft)] text-[var(--color-success)]"
            }
          `}
        >
          <span>
            {
              {
                todo: "انجام‌نشده",
                inProgress: "در حال انجام",
                review: "بازبینی",
                done: "انجام‌شده"
              }[status]
            }
          </span>
        </span>
        <button
          onClick={moreOptionsHandler}
          className="absolute -left-1 -top-1 hover:bg-[var(--color-hover)] rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200 cursor-pointer">
          <PiDotsThreeVerticalBold
            className="text-lg" />
        </button>
        {
          isMoreOptionOpen && (
            <div className="absolute top-0 left-0">
              {children}
            </div>
          )
        }
      </div>

    </div>
  )
}

export default TaskCard