import type { ProjectCartProps } from "../../types/project";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const ProjectCard = ({
  id,
  title,
  description,
  date,
  status,
  className = "",
  children,
  deadline
}: ProjectCartProps) => {
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
        <div className="space-y-2 flex-1 mb-2">

          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
            {title}
          </h2>

          <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
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

        <button className="absolute left-0 top-0 hover:bg-[var(--color-hover)] rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200">
          <PiDotsThreeVerticalBold className="text-lg" />
        </button>

      </div>

      <div className="mt-5 flex items-center justify-between w-full">

        <div className="space-y-1">

          <div className="flex gap-2 py-1 px-3 rounded-lg bg-[var(--color-surface)] text-sm">
            <span>تاریخ تعریف پروژه: </span>
            <p>
              {date}
            </p>
          </div>

          <div className="flex gap-2 py-1 px-3 rounded-lg bg-[var(--color-surface)] text-sm">
            <span>آیدی پروژه: </span>
            <p>
              {id}#
            </p>
          </div>

          
              <div className="flex gap-2 py-1 px-3 rounded-lg bg-[var(--color-surface)] text-sm">
                <span>ددلاین: </span>
                <p>
                  
                  { deadline ? 
                    new DateObject(deadline).convert(persian, persian_fa).format("YYYY/MM/DD")
                    : "تعریف نشده"
                  }
                </p>
              </div>

        </div>

        <div className="flex items-center gap-2">
          {children}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;