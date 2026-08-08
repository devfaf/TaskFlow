import { useTaskStore } from "../store/taskStore"
import TaskCard from "./TaskCard"
import { useParams } from "react-router"
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { useProjectStore } from "../store/projectStore";
import EmptyState from "../../../components/common/EmptyState";

const TaskList = () => {
    const tasks = useTaskStore(state => state.tasks)
    const { id } = useParams()
    const projectTasks = tasks.filter(
        (task) => task.projectId === Number(id)
    )
    const removeTask = useTaskStore(state => state.removeTask)
    const openModal = useProjectStore(state => state.openModal)
    const setEditingTask = useTaskStore(state => state.setEditingTask)

    return (
        <div className={`${projectTasks.length > 0 ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' : ''}`}>
            {
                projectTasks.length > 0 ? projectTasks.map(task => {
                    return (
                        <TaskCard
                            {...task}
                            key={task.id}
                        >
                            <div className="flex items-center gap-2">
                                <BsFillTrash3Fill
                                    className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-danger-soft)] hover:text-[var(--color-danger)] cursor-pointer"
                                        aria-label="حذف تسک"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeTask(task.id)
                                    }}
                                />
                                <BsFillPencilFill
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setEditingTask(task)
                                        openModal()
                                    }}
                                    className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)] cursor-pointer"
                                        aria-label="ویرایش تسک" />
                            </div>

                        </TaskCard>
                    )
                }) : <EmptyState />
            }
        </div>
    )
}

export default TaskList