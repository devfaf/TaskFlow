import { useDraggable } from "@dnd-kit/react";
import type { Task } from "../../types/task"
import TaskCard from "./TaskCard";
import TaskCardActions from "./TaskCardActions";
import { useTaskStore } from "../store/taskStore";
import TaskForm from "./TaskForm";

type DraggableTaskCardProps = {
    task: Task;
}

const DraggableTaskCard = ({ task }: DraggableTaskCardProps) => {
    const { ref } = useDraggable({
        id: task.id,
    })
    const isModalOpen = useTaskStore(state => state.isModalOpen)
    const closeModal = useTaskStore(state => state.closeModal)

    return (
        <div ref={ref}>
            <TaskCard
                {...task}
                className="wrap-anywhere"
            >
                <TaskCardActions task={task} />
            </TaskCard>
            <TaskForm isOpen={isModalOpen} onClose={closeModal}>
                فرم افزودن تسک
            </TaskForm>
        </div>
    )
}

export default DraggableTaskCard