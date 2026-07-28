import { useTaskStore } from "../features/projects/store/taskStore"
import { useProjectStore } from "../features/projects/store/projectStore"
import TaskList from "../features/projects/components/TaskList"
import EmptyState from "../components/common/EmptyState"
import Button from "../components/common/Button"
import TaskForm from "../features/projects/components/TaskForm"

const TasksPage = () => {
  const tasks = useTaskStore(state => state.tasks)
  const isModalOpen = useProjectStore(state => state.isModalOpen)
  const openModal = useProjectStore(state => state.openModal)
  const closeModal = useProjectStore(state => state.closeModal)

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button 
        onClick={openModal} 
        variant="primary">
          افزودن تسک +
        </Button>
      </div>
      {
        tasks.length > 0 ? <TaskList/> : <EmptyState/>
      }
      <TaskForm isOpen={isModalOpen} onClose={closeModal}>
        فرم افزودن تسک
      </TaskForm>
    </div>
  )
}

export default TasksPage