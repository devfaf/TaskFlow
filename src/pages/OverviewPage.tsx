import { useParams } from "react-router"
import { useTaskStore } from "../features/projects/store/taskStore"
import { useProjectStore } from "../features/projects/store/projectStore"
const OverviewPage = () => {
  const { id } = useParams()

  const tasks = useTaskStore(state => state.tasks)
  const projects = useProjectStore(state => state.projects)

  const taskCount = tasks.filter(task => task.projectId === Number(id))
  const todoTaskCount = taskCount.filter(task => task.status === "todo")
  const doneTaskCount = taskCount.filter(task => task.status === "done")
  const inProgressTaskCount = taskCount.filter(task => task.status === "inProgress")
  const reviewTaskCount = taskCount.filter(task => task.status === "review")
  const projectStatus = projects.filter(project => project.id === Number(id))[0].status
  // console.log(projectStatus);


  return (
    <div className="grid gap-4 md:grid-cols-6 p-4">
      <div
        className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-3
          flex
          flex-col
          items-center
          h-full
        "
      >
        <p className="text-xs text-[var(--color-text-secondary)] text-center">
          تعداد کل تسک‌ها
        </p>

        <h2 className="text-6xl font-bold h-full flex items-center text-[var(--color-primary)] text-center">
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
          flex
          flex-col
          items-center
          h-full
        "
      >
        <p className="text-xs text-[var(--color-text-secondary)] text-center">
          تسک‌های انجام‌نشده
        </p>

        <h2 className="text-6xl font-bold h-full flex items-center text-[var(--color-danger)] text-center">
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
          flex
          flex-col
          items-center
          h-full
        "
      >
        <p className="text-xs text-[var(--color-text-secondary)] text-center">
          تسک‌های درحال انجام
        </p>

        <h2 className="text-6xl font-bold h-full flex items-center text-[var(--color-warning)] text-center">
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
          flex
          flex-col
          items-center
          h-full
        "
      >
        <p className="text-xs text-[var(--color-text-secondary)] text-center">
          تسک‌های درحال بازبینی
        </p>

        <h2 className="text-6xl font-bold h-full flex items-center text-[var(--color-info)] text-center">
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
          flex
          flex-col
          items-center
          h-full
        "
      >
        <p className="text-xs text-[var(--color-text-secondary)] text-center">
          تسک‌های انجام‌شده
        </p>

        <h2 className="text-6xl font-bold text-[var(--color-success)] text-center h-full flex items-center">
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
          flex
          flex-col
          items-center
          h-full
        "
      >
        <p className="text-xs text-[var(--color-text-secondary)] text-center">
          وضعیت پروژه‌ها
        </p>

        <div className="
            flex
            justify-center
            items-center
            
            ">
          <span
            className={`
              ${projectStatus === "completed" ?
                "bg-green-100" :
                "bg-red-100"
              }
              inline-flex
              rounded-lg
              py-2
              px-4
              mt-2
              text-3xl
              text-green-700
              text-center
            `}
          >
            {
              projectStatus === "completed" ? "تکمیل شده" : "فعال"
            }
          </span>
        </div>

      </div>
    </div>
  )
}

export default OverviewPage