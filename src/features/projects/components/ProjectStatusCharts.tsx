import { useProjectStore } from "../store/projectStore"
import { Pie, PieChart, Sector, Tooltip } from 'recharts';

const ProjectStatusCharts = () => {
    const projects = useProjectStore(state => state.projects)

    const activeCount = projects.filter(
        (project) => project.status === "active"
    ).length;

    const completedCount = projects.filter(
        (project) => project.status === "completed"
    ).length;
    const all = projects.filter(
        (project) => project
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
        <div
            className="
            rounded-xl
            border
            border-[var(--color-border)]
            bg-white
            p-6
            "
        >
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
                            نمودار دایره‌ای
                        </h2>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                            تعداد پروژه‌های تکمیل شده و تکمیل نشده
                        </p>

                    </div>
                    <div className="flex justify-center items-center">
                        {
                            all === 0 ? <p className="text-[var(--color-danger)] text-2xl font-bold">
                                دیتایی جهت نمایش وجود ندارد
                            </p> : (
                                <PieChart
                                    className="w-xs h-76 rounded-lg"
                                    responsive
                                >
                                    <Pie
                                        data={chartData}
                                        dataKey="status"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius="90%"
                                        shape={(props) => (
                                            <Sector
                                                {...props}
                                                fill={props.payload.color}
                                            />
                                        )

                                        }
                                    />
                                    <Tooltip
                                        formatter={(value, name) => [[`${value}`, ' پروژه ', name]]}
                                    />
                                </PieChart>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProjectStatusCharts