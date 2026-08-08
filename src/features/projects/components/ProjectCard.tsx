import type { ProjectCartProps } from "../../types/project";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";

const ProjectCard = ({
  title,
  description,
  date,
  status,
  className = "",
  children,
  deadline
}: ProjectCartProps) => {

  const [isMoreOptionOpen, setIsMoreOptionOpen] = useState(false);

  const moreOptionsHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setIsMoreOptionOpen((prev) => !prev)
  }

  return (
    <div
      className={`
        rounded-xl
        border
        border-[var(--color-border)]
        bg-white
        p-4
        transition-all
        duration-200
        ${className}
      `}
    >
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
            ${status === "active"
              ? "bg-[var(--color-success-soft)] text-[var(--color-success)]"
              : "bg-[var(--color-danger-soft)] text-[var(--color-danger)]"
            }
          `}
        >
          {status === "active" ? "فعال" : "تکمیل شده"}
        </span>

        <button
          onClick={moreOptionsHandler}
          className="absolute -left-1 -top-1 hover:bg-[var(--color-hover)] rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200 cursor-pointer">
          <PiDotsThreeVerticalBold className="text-lg" />
        </button>
        {
          isMoreOptionOpen && (
            <div className="absolute top-0 left-0">
              {children}
            </div>
          )
        }
        
      </div>

      <div className="mt-5 flex items-center justify-between w-full">

        <div className="space-y-2 pb-2">

          <div className="flex gap-2 rounded-lg text-sm text-[var(--color-text-secondary)]">
            <span>تاریخ تعریف پروژه: </span>
            <p>
              {date}
            </p>
          </div>

          <div className="flex gap-2 rounded-lg bg-[var(--color-surface)] text-sm text-[var(--color-text-secondary)]">
            <span>مهلت پایان: </span>
            <p>

              {deadline ?
                new DateObject(deadline).convert(persian, persian_fa).format("YYYY/MM/DD")
                : "تعریف نشده"
              }
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;