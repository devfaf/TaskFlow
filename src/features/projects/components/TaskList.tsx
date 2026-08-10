import { useTaskStore } from "../store/taskStore"
import TaskCard from "./TaskCard"
import { useParams } from "react-router"
import EmptyState from "../../../components/common/EmptyState";
import TaskCardActions from "./TaskCardActions";

const TaskList = () => {
    const tasks = useTaskStore(state => state.tasks)
    const { id } = useParams()
    const projectTasks = tasks.filter(
        (task) => task.projectId === Number(id)
    )

    return (
        <div className={`${projectTasks.length > 0 ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' : ''}`}>
            {
                projectTasks.length > 0 ? projectTasks.map(task => {
                    return (
                        <TaskCard
                            {...task}
                            key={task.id}
                        >
                            <TaskCardActions task={task} />
                        </TaskCard>
                    )
                }) : <EmptyState />
            }
        </div>
    )
}

export default TaskList