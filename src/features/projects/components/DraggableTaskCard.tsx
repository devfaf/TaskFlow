import { useDraggable } from "@dnd-kit/react";
import type { Task } from "../../types/task"
import TaskCard from "./TaskCard";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { useTaskStore } from "../store/taskStore";
import { useProjectStore } from "../store/projectStore";
import TaskForm from "./TaskForm";


type DraggableTaskCardProps = {
    task: Task;
}

const DraggableTaskCard = ({ task }: DraggableTaskCardProps) => {
    const { ref } = useDraggable({
        id: task.id,
    })
    const isModalOpen = useProjectStore(state => state.isModalOpen)
    const removeTask = useTaskStore(state => state.removeTask)
    const setEditingTask = useTaskStore(state => state.setEditingTask)
    const openModal = useProjectStore(state => state.openModal)
    const closeModal = useProjectStore(state => state.closeModal)

    return (
        <div ref={ref}>
            <TaskCard
                {...task}
                className="wrap-anywhere"
            >
                <div className="flex items-center gap-2">
                    <button
                        onClick={(e) => {
                            removeTask(task.id)
                            e.stopPropagation()
                        }}
                        className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-danger-soft)] hover:text-[var(--color-danger)] cursor-pointer"
                        aria-label="حذف پروژه"
                    >
                        <BsFillTrash3Fill size={16} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setEditingTask(task)
                            openModal()
                        }}
                        className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)] cursor-pointer"
                        aria-label="ویرایش پروژه"
                    >
                        <BsFillPencilFill size={16} />
                    </button>
                </div>
            </TaskCard>
            <TaskForm isOpen={isModalOpen} onClose={closeModal}>
                فرم افزودن تسک
            </TaskForm>
        </div>
    )
}

export default DraggableTaskCard