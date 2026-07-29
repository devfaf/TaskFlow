import { useProjectStore } from "../store/projectStore"
import { Pie, PieChart, Sector, Tooltip} from 'recharts';

const ProjectStatusCharts = () => {
    const projects = useProjectStore(state => state.projects)

    const activeCount = projects.filter(
        (project) => project.status === "active"
    ).length;

    const completedCount = projects.filter(
        (project) => project.status === "completed"
    ).length;

    const chartData = [
        {
            name: "فعال",
            status: activeCount,
            color: "#2AB788",
        },
        {
            name: "تکمیل شده",
            status: completedCount,
            color: "#5959F6",
        }
    ]

    return (
        <div className="">
            <PieChart
                className="w-xs bg-gray-100"
                responsive
            >
                <Pie
                    data={chartData}
                    dataKey="status"
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    shape={(props) => (
                        <Sector 
                            {...props}
                            fill={props.payload.color}
                        />
                    )

                    }
                />
                <Tooltip
                   formatter={(value) => [[`${value}`, ' پروژه ']]}
                />
            </PieChart>
        </div>
    )
}
export default ProjectStatusCharts