import { useTaskStore } from "../features/projects/store/taskStore"
import TaskList from "../features/projects/components/TaskList"
import EmptyState from "../components/common/EmptyState"
import Button from "../components/common/Button"
import TaskForm from "../features/projects/components/TaskForm"
import { PiPlus } from "react-icons/pi"

const TasksPage = () => {
  const tasks = useTaskStore(state => state.tasks)
  const isModalOpen = useTaskStore(state => state.isModalOpen)
  const openModal = useTaskStore(state => state.openModal)
  const closeModal = useTaskStore(state => state.closeModal)

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-center w-full">
        <Button
          variant="primary"
          onClick={openModal}
          className="flex gap-2"
          >
          <PiPlus />
          افزودن وظیفه
        </Button>
      </div>
      {
        tasks.length > 0 ? <TaskList /> : <EmptyState />

      }
      <TaskForm isOpen={isModalOpen} onClose={closeModal}>
        فرم افزودن تسک
      </TaskForm>
    </div>
  )
}

export default TasksPage