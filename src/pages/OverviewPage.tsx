import { useParams } from "react-router"
import { useTaskStore } from "../features/projects/store/taskStore"
import { useProjectStore } from "../features/projects/store/projectStore"
import TaskInfo from "../components/common/TaskInfo"

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


  return (
    <div className="grid gap-4 md:grid-cols-6">
      <TaskInfo title="تعداد کل تسک‌ها">
        {taskCount.length}
      </TaskInfo>

      <TaskInfo title="تسک‌های انجام‌نشده">
        {todoTaskCount.length}
      </TaskInfo>

      <TaskInfo title="تسک‌های درحال انجام">
        {inProgressTaskCount.length}
      </TaskInfo>

      <TaskInfo title="تسک‌های درحال بازبینی">
        {reviewTaskCount.length}
      </TaskInfo>

      <TaskInfo title="تسک‌های انجام‌شده">
        {doneTaskCount.length}
      </TaskInfo>

      <TaskInfo title="وضعیت پروژه">
        {
          projectStatus === "completed" ? "تکمیل شده" : "فعال"
        }
      </TaskInfo>
    </div >
  )
}

export default OverviewPage