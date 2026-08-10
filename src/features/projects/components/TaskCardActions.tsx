import { useTaskStore } from "../store/taskStore";
import type { Task } from "../../types/task";

type TaskCardActionProps = {
    task: Task;
}

const TaskCardActions = ({ task } : TaskCardActionProps) => {
    const deleteTask = useTaskStore(state => state.removeTask)
    const setEditingTask = useTaskStore(state => state.setEditingTask)
    const openModal = useTaskStore(state => state.openModal)

    const handleDeleteButton = (e : React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        deleteTask(task.id);
    }

    const handleEditButton = (e : React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setEditingTask(task);
        openModal();
    }

    return (
        task &&
        <div className="absolute left-8 -top-1 flex flex-col text-sm w-fit items-center bg-[var(--color-surface)] border rounded-lg p-2 border-[var(--color-border)]">

            <button
                onClick={handleDeleteButton}
                className="w-full rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200 cursor-pointer hover:bg-gray-100 text-nowrap"
                aria-label="حذف پروژه"
            >
                حذف پروژه
            </button>

            <button
                onClick={handleEditButton}
                className="w-full rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200 cursor-pointer hover:bg-gray-100 text-nowrap"
                aria-label="ویرایش پروژه"
            >
                ویرایش پروژه
            </button>

        </div>
    )
}
export default TaskCardActions 