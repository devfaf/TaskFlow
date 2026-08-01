import Modal from "../../../components/common/Modal"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DateObject from "react-date-object"
import { useCalendarStore } from "../../types/calendarStore"
import { useProjectStore } from "../../projects/store/projectStore"
import Button from "../../../components/common/Button"
import { useState } from "react"

const DeadlineModal = () => {
    const isOpen = useCalendarStore(state => state.isModalOpen)
    const onClose = useCalendarStore(state => state.closeModal)
    const selectedDate = useCalendarStore(state => state.selectedDate)
    const jalaliDate = selectedDate ? new DateObject(selectedDate).convert(persian, persian_fa) : null;
    const projects = useProjectStore(state => state.projects)
    const toggleProjectSelection = useCalendarStore(state => state.toggleProjectSelection)
    const selectedProjectIds = useCalendarStore(state => state.selectedProjectIds)
    const setProjectDeadline = useProjectStore(state => state.setProjectDeadline)

    const activeProjects = projects.filter(project =>
        project.status === "active"
    )

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                className="flex flex-col space-y-4 gap-4"
            >
                <div className="flex gap-2 mb-0 text-center">
                    <p>تاریخ انتخاب شده:</p>
                    <p>
                        {
                            jalaliDate?.format("YYYY/MM/DD")
                        }
                    </p>
                </div>
                <div className="flex space-y-4 flex-col">
                    {
                        activeProjects.map(project =>
                            <div
                                onClick={() => {
                                    toggleProjectSelection(project.id)
                                }}
                                key={project.id}
                                className={`flex gap-2 shadow p-2 rounded-lg duration-200 cursor-pointer border-b-2 border-transparent hover:border-[var(--color-primary-light)] 
                                ${selectedProjectIds.includes(project.id) ? "border-b-[var(--color-primary)]" : ""}`}>
                                <p>عنوان پروژه: </p>
                                <p>{project.title}</p>
                            </div>
                        )
                    }
                </div>
                <div className="">
                    <Button
                        onClick={() => {
                            if (selectedProjectIds !== null && selectedDate) {
                                setProjectDeadline(
                                    selectedProjectIds,
                                    selectedDate
                                )
                                onClose()
                            }
                        }}
                    >
                        ثبت ددلاین
                    </Button>
                </div>
            </Modal>
        </div>
    )
}
export default DeadlineModal