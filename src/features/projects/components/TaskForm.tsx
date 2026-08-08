import { useEffect, useState, type SyntheticEvent } from "react";
import type { ModalProps } from "../../../components/types/modal"
import Input from "../../../components/common/Input"
import TextArea from "../../../components/common/TextArea"
import Button from "../../../components/common/Button"
import { useTaskStore } from "../store/taskStore";
import type { TaskStatus } from "../../types/task";
import { FiX } from "react-icons/fi";
import { useParams } from "react-router";
import Select from "../../../components/common/Select";
import { BOARD_STATUS_OPTIONS } from "../../types/boardColumnProps";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";


const TaskForm = ({ isOpen, onClose }: ModalProps) => {
    const { id } = useParams();
    const addTask = useTaskStore((state) => state.addTask)
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState<TaskStatus>("todo")
    const [description, setDescription] = useState("")
    const editingTask = useTaskStore((state) => state.editingTask)
    const updateTask = useTaskStore((state) => state.updateTask)
    const setEditingTask = useTaskStore((state) => state.setEditingTask)
    const isTitleValid = title.trim().length > 0
    const isDescriptionValid = description.trim().length >= 5


    const submitHandler = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isTitleValid && !isDescriptionValid) {
            return;
        }

        if (editingTask) {
            updateTask({
                projectId: Number(id),
                id: editingTask.id,
                title,
                description,
                date: editingTask.date,
                status,
            })
        } else {
            addTask({
                projectId: Number(id),
                id: Date.now(),
                title,
                description,
                date: new DateObject(Date.now()).convert(persian, persian_fa).format("YYYY/MM/DD"),
                status,
            })
        }
        onClose()
        setTitle("")
        setDescription("")
        setStatus("todo")
        setEditingTask(null)
    }

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title)
            setDescription(editingTask.description)
            setStatus(editingTask.status)
        }
    }, [editingTask])

    return (
        <form onSubmit={submitHandler} className={`absolute ${isOpen ? "block" : "hidden"}`}>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                    onClick={() => {
                        onClose()
                        setEditingTask(null)
                    }}
                    className="absolute inset-0 bg-black/30"
                ></div>
                <div className="border-2 border-gray-100 shadow p-4 rounded-lg flex flex-col gap-4 bg-white max-w-lg w-sm z-90">
                    <FiX
                        className="text-xl cursor-pointer"
                        onClick={() => {
                            onClose()
                            setEditingTask(null)

                        }}
                    />
                    <Input
                        id="title"
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        placeholder="عنوان" label="عنوان کار"
                        className={`bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full`}
                        type="text"
                        error={
                            title.trim().length === 0 ? "عنوان اجباری است" : null
                        }
                    />

                    <Select options={BOARD_STATUS_OPTIONS}
                        value={status}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value as TaskStatus)}
                        className="bg-white rounded-lg p-1 border-gray-300 border-2" />

                    <TextArea
                        value={description}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                        id="task"
                        name="task"
                        placeholder="توضیحات کار..."
                        className="bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full"
                        error={
                            description.trim().length < 5 ? "متن توضیحات باید بالای 5 کاراکتر باشد" : null
                        }
                    />

                    <div className="flex gap-2 w-full">
                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full"
                        >ذخیره</Button>
                        <Button
                            type="button"
                            onClick={() => {
                                onClose()
                                setEditingTask(null)
                            }}
                            variant="danger"
                            className="w-full"
                        >انصراف</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default TaskForm