

type TaskInfoProps = {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const TaskInfo = ({ title, children, className }: TaskInfoProps) => {
    return (
        <div
        className={`
          bg-[var(--color-surface)]
          flex
          flex-col
          items-center
          h-full
          rounded-xl
          ${className ?? ""}
          `}
        >
            <p className="text-sm text-[var(--color-text-secondary)] text-center pt-2 w-full">
                {title}
            </p>

            <p className="text-4xl p-6 h-full flex items-center text-[var(--color-text-secondary)] text-center">
                {children}
            </p>
        </div>
    )
}
export default TaskInfo