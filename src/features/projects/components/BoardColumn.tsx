import type { BoardColumnProps } from "../../types/boardColumnProps"
import { useTaskStore } from "../store/taskStore"
import { useParams } from "react-router"
import { useDroppable } from '@dnd-kit/react';
import DraggableTaskCard from "./DraggableTaskCard";


const BoardColumn = ({ value, label }: BoardColumnProps) => {
    const tasks = useTaskStore(state => state.tasks)
    const { id } = useParams()

    const filteredTasks = tasks.filter((task) =>
        task.projectId === Number(id) &&
        task.status === value
    )

    const { ref } = useDroppable({
        id: value,
    });
    console.log(ref);



    return (
        <section ref={ref} className="p-4 flex flex-col bg-blue-200 rounded-xl items-center">
            <h2 className="border-b-2 border-blue-400 pb-1">{label}</h2>
            <div>
                {
                    filteredTasks.map((task) =>
                        <DraggableTaskCard
                            task={task}
                            key={task.id}
                        />
                    )
                }
            </div>
        </section>
    )
}

export default BoardColumn