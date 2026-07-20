import { useTaskStore } from "../store/taskStore"
import TaskCard from "./TaskCard"
import { useParams } from "react-router"

const TaskList = () => {
    const tasks = useTaskStore(state => state.tasks)
    const {id} = useParams()
    const projectTasks = tasks.filter(
        (task) => task.projectId === Number(id)
    )
    
    

  return (
    <div className="flex flex-col gap-3">
        {
            projectTasks.map(task => {
                return (
                <TaskCard 
                {...task}
                key={task.id}
                className="shadow p-2 rounded-lg w-md flex justify-center items-center flex-col gap-2 bg-yellow-100"
                ></TaskCard>
                )
            })
        }
    </div>
  )
}

export default TaskList