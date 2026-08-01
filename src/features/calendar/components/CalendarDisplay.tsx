// import DateObject from "react-date-object"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { Calendar } from "react-multi-date-picker"
// import { useProjectStore } from "../../projects/store/projectStore"
import { useCalendarStore } from "../../types/calendarStore"
import DeadlineModal from "./DeadlineModal"


const CalendarDisplay = () => {
    // const setProjectDeadline = useProjectStore(state => state.setProjectDeadline)
    // const projects = useProjectStore(state => state.projects)
    const openModal = useCalendarStore(state => state.openModal)
    // const closeModal = useCalendarStore(state => state.closeModal)


    return (
        <div className="
            rounded-xl
            border
            border-[var(--color-border)]
            bg-white
            p-6
            w-full
        ">
            <Calendar
                calendar={persian}
                locale={persian_fa}
                onChange={(date) => {
                    if (!date) return;
                    openModal(date.toDate())
                }}
            />
            <DeadlineModal />
        </div>
    )
}
export default CalendarDisplay