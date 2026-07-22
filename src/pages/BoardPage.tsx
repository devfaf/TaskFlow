import BoardColumn from "../features/projects/components/BoardColumn"
import { BOARD_STATUS_OPTIONS } from "../features/types/boardColumnProps"
import { DragDropProvider } from "@dnd-kit/react"
import { useTaskStore } from "../features/projects/store/taskStore"
import type { TaskStatus } from "../features/types/task"

const BoardPage = () => {
  const updateTaskStatus = useTaskStore(state => state.updateTaskStatus)

  return (
    <div className="grid grid-cols-4 gap-4">
      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;
          const taskId = Number(event.operation.source?.id)
          const newState = event.operation.target?.id as TaskStatus;

          if (!newState) return;
          updateTaskStatus(taskId, newState)
        }}
      >
        {
          BOARD_STATUS_OPTIONS.map((column) =>
            <BoardColumn
              key={column.label}
              value={column.value}
              label={column.label}
            />
          )
        }
      </DragDropProvider>
    </div>
  )
}

export default BoardPage