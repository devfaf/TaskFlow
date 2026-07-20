import { useTaskStore } from "../features/projects/store/taskStore"
import TaskList from "../features/projects/components/TaskList"
import EmptyState from "../components/common/EmptyState"

const TasksPage = () => {
  const tasks = useTaskStore(state => state.tasks)
  return (
    <div>
      {
        tasks.length > 0 ? <TaskList/> : <EmptyState/>
      }
    </div>
  )
}

export default TasksPage