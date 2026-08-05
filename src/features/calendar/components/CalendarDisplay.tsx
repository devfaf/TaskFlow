import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { Calendar } from "react-multi-date-picker"
import { useCalendarStore } from "../../types/calendarStore"
import DeadlineModal from "./DeadlineModal"
import { useProjectStore } from "../../projects/store/projectStore"
import DateObject from "react-date-object"
import DeadlineDot from "./DeadlineDot"
import DeadlineInfo from "./DeadlineInfo"
import ReportButton from "../../report/components/ReportButton"

const CalendarDisplay = () => {
    const openModal = useCalendarStore(state => state.openModal)
    const projects = useProjectStore(state => state.projects)

    return (
        <div className="
            rounded-xl
            border
            border-[var(--color-border)]
            bg-white
            p-6
            w-full
        ">
            <div className="flex flex-col space-y-6">
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
                           تقویم شمسی
                        </h2>
                        <p className="text-sm text-[var(--color-text-secondary)]">برای انتخاب مهلت پایانی پروژه روی روز موردنظر کلیک کنید</p>
                    </div>
                    <ReportButton />
                </div>
                <div className="flex flex-col gap-4 items-center z-30">
                    <Calendar
                        calendar={persian}
                        locale={persian_fa}
                        onChange={(date) => {
                            if (!date) return;
                            openModal(date.toDate())
                        }}
                        mapDays={({ date }) => {
                            const projectsOfThisDay = projects.filter(project => {
                                if (!project.deadline) return false

                                const deadline = new DateObject(project.deadline).convert(persian, persian_fa)

                                return deadline.format("YYYY/MM/DD") === date.format("YYYY/MM/DD")
                            })

                            return {
                                children: (
                                    <div className="relative h-full w-full group">
                                        <span>{date.day}</span>

                                        <DeadlineDot count={projectsOfThisDay.length} />
                                        {
                                            projectsOfThisDay.length > 0 && (
                                                <DeadlineInfo projects={projectsOfThisDay} />
                                            )
                                        }
                                    </div>
                                )
                            }
                        }}
                    />
                </div>
            </div>
            <DeadlineModal />
        </div>
    )
}
export default CalendarDisplay