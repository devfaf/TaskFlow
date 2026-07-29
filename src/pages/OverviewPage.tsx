import { useParams } from "react-router"
import { useTaskStore } from "../features/projects/store/taskStore"

const OverviewPage = () => {
  const { id } = useParams()

  const tasks = useTaskStore(state => state.tasks)
  // const projects = useProjectStore(state => state.projects)

  const taskCount = tasks.filter(task => task.projectId === Number(id))
  const todoTaskCount = taskCount.filter(task => task.status === "todo")
  const doneTaskCount = taskCount.filter(task => task.status === "done")
  const inProgressTaskCount = taskCount.filter(task => task.status === "inProgress")
  const reviewTaskCount = taskCount.filter(task => task.status === "review")


  console.log(doneTaskCount);

  return (
    <div className="grid gap-4 md:grid-cols-6 p-4">
      <div
        className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-3
        "
      >
        <p className="mb-2 text-xs text-[var(--color-text-secondary)] text-center pb-2">
          تعداد کل تسک‌ها
        </p>

        <h2 className="text-4xl font-bold text-[var(--color-primary)] text-center">
          {taskCount.length}
        </h2>
      </div>

      <div
        className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-3
        "
      >
        <p className="mb-2 text-xs text-[var(--color-text-secondary)] text-center pb-2">
          تسک‌های انجام‌نشده
        </p>

        <h2 className="text-4xl font-bold text-[var(--color-danger)] text-center">
          {todoTaskCount.length}
        </h2>
      </div>

      <div
        className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-3
        "
      >
        <p className="mb-2 text-xs text-[var(--color-text-secondary)] text-center pb-2">
          تسک‌های درحال انجام
        </p>

        <h2 className="text-4xl font-bold text-[var(--color-warning)] text-center">
          {inProgressTaskCount.length}
        </h2>
      </div>

      <div
        className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-3
        "
      >
        <p className="mb-2 text-xs text-[var(--color-text-secondary)] text-center pb-2">
          تسک‌های درحال بازبینی
        </p>

        <h2 className="text-4xl font-bold text-[var(--color-info)] text-center">
          {reviewTaskCount.length}
        </h2>
      </div>

      <div
        className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-3
        "
      >
        <p className="mb-2 text-xs text-[var(--color-text-secondary)] text-center pb-2">
          تسک‌های انجام‌شده
        </p>

        <h2 className="text-4xl font-bold text-[var(--color-success)] text-center">
          {doneTaskCount.length}
        </h2>
      </div>

      <div
        className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-3
        "
      >
        <p className="mb-2 text-xs text-[var(--color-text-secondary)] text-center pb-2">
          وضعیت پروژه‌ها
        </p>

        <div className="
            flex
            justify-center
            items-center
            
            ">
          <span
            className="
              inline-flex
              rounded-lg
              bg-green-100
              py-3
              px-6
              text-3xl
              text-green-700
              text-center
            "
          >
            فعال
          </span>
        </div>

      </div>
    </div>
  )
}

export default OverviewPage