import type { BoardColumnProps } from "../../types/boardColumnProps"
import { useTaskStore } from "../store/taskStore"

import TaskCard from "./TaskCard"


const BoardColumn = ({ value, label }: BoardColumnProps) => {
    const tasks = useTaskStore(state => state.tasks)

    const filteredTasks = tasks.filter((task) =>
        task.status === value
    )

    return (
        <section className="p-4 flex flex-col bg-blue-200 rounded-xl items-center">
            <h2 className="border-b-2 border-blue-400 pb-1">{label}</h2>
            <div>
                {
                    filteredTasks.map((task) =>
                        <TaskCard
                            {...task}
                            key={task.status}
                            className="shadow p-2 rounded-lg flex justify-center items-center flex-col gap-2 bg-yellow-100 mt-4"
                        />
                    )
                }
            </div>
        </section>
    )
}

export default BoardColumn