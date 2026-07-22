import type { TaskCardProps } from "../../types/task"

const TaskCard = ({id, title, status, className, children}: TaskCardProps) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      {/* <p>{description}</p>
      <p>{date}</p> */}
      <span>{status}</span>
      <span>Task Number: {id}</span>
      {children}
    </div>
  )
}

export default TaskCard