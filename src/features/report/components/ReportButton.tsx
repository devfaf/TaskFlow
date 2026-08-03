import Button from "../../../components/common/Button"
import { generateReport } from "../utils/generateReport"
import { useProjectStore } from "../../projects/store/projectStore"
import { useTaskStore } from "../../projects/store/taskStore";

const ReportButton = () => {
    const projects = useProjectStore(state => state.projects)
    const tasks = useTaskStore(state => state.tasks)
    return (
        <div>
            <Button
                variant="secondary"
                onClick={() => generateReport(projects, tasks)}
            >
                دانلود گزارش ۳۰ روز اخیر
            </Button>
        </div>
    )
}
export default ReportButton