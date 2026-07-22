import BoardColumn from "../features/projects/components/BoardColumn"
import { BOARD_STATUS_OPTIONS } from "../features/types/boardColumnProps"


const BoardPage = () => {

  return (
    <div className="grid grid-cols-4 gap-4">
      {
        BOARD_STATUS_OPTIONS.map((column) =>
          <BoardColumn
            key={column.label}
            value={column.value}
            label={column.label}
          />
        )
      }
    </div>
  )
}

export default BoardPage