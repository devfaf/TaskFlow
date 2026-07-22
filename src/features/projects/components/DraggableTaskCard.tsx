import { useDraggable } from "@dnd-kit/react";
import type { Task } from "../../types/task"
import TaskCard from "./TaskCard";


type DraggableTaskCardProps = {
    task: Task;
}

const DraggableTaskCard = ({task}: DraggableTaskCardProps) => {
    const {ref} = useDraggable({
        id: task.id,
    })

  return (
    <div ref={ref}>
        <TaskCard
            {...task}
            className="shadow p-2 rounded-lg flex justify-center items-center flex-col gap-2 bg-yellow-100 mt-4"
        />
    </div>
  )
}

export default DraggableTaskCard