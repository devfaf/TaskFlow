import { useTaskStore } from "../store/taskStore"
import TaskCard from "./TaskCard"
import { useParams } from "react-router"
import { BsFillTrash3Fill } from "react-icons/bs";
import EmptyState from "../../../components/common/EmptyState";
import { BsFillPencilFill } from "react-icons/bs";
import { useProjectStore } from "../store/projectStore";

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
        <div className="flex flex-col gap-3">
            {
                projectTasks.length > 0 ? projectTasks.map(task => {
                    return (
                        <TaskCard
                            {...task}
                            key={task.id}
                            className="shadow p-2 rounded-lg flex justify-center items-center flex-col gap-2 bg-yellow-100"
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
                    )
                }) : <EmptyState />
            }
        </div>
    )
}

export default TaskList