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
                className="shadow p-2 rounded-lg flex justify-center items-center flex-col gap-2 bg-yellow-100 mt-4 w-full"
            >
                <div className="flex gap-4">
                    <BsFillTrash3Fill
                        className="cursor-pointer hover:text-red-600"
                        onClick={() =>
                            removeTask(task.id)
                        }
                    />
                    <BsFillPencilFill
                        onClick={() => {
                            setEditingTask(task)
                            openModal()
                        }}
                        className="cursor-pointer hover:text-red-600" />
                </div>
            </TaskCard>
            <TaskForm isOpen={isModalOpen} onClose={closeModal}>
                فرم افزودن تسک
            </TaskForm>
        </div>
    )
}

export default DraggableTaskCard