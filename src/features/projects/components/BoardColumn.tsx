import type { BoardColumnProps } from "../../types/boardColumnProps"
import { useTaskStore } from "../store/taskStore"
import { useParams } from "react-router"
import { useDroppable } from '@dnd-kit/react';
import DraggableTaskCard from "./DraggableTaskCard";
import TaskCardSkeleton from "../../../components/common/TaskCardSkeleton";
import { useEffect, useState } from "react";


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

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500);

        return () => clearTimeout(timer)
    }, [])


    return (
        <section ref={ref} className={`
            rounded-xl
            border
            border-[var(--color-border)]
            bg-white
            p-4
            transition-all
            duration-200
            space-y-4
        `}>
            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] pb-2 border-b border-[var(--color-border)]">{label}</h2>
            {isLoading ? (
                <TaskCardSkeleton />
            ) :
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
            }
        </section>
    )
}

export default BoardColumn