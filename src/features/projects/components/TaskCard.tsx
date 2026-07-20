import type { TaskCardProps } from "../../types/task"

const TaskCard = ({id, title, completed, className, children}: TaskCardProps) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      {/* <p>{description}</p>
      <p>{date}</p> */}
      <span>{completed}</span>
      <span>Project Number: {id}</span>
      {children}
    </div>
  )
}

export default TaskCard