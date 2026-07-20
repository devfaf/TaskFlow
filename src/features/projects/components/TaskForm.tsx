import { useState, type SyntheticEvent } from "react";
import type { ModalProps } from "../../../components/types/modal"
import Input from "../../../components/common/Input"
import TextArea from "../../../components/common/TextArea"
import Button from "../../../components/common/Button"
import { useTaskStore } from "../store/taskStore";
import { FiX } from "react-icons/fi";

const TaskForm = ({isOpen, onClose}: ModalProps) => {
    const addTask = useTaskStore((state) => state.addTask)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [completed, setCompleted] = useState(true)
    // const editingProject = useProjectStore((state) => state.editingProject)
    // const updateProject = useProjectStore((state) => state.updateProject)
    // const setEditingProject = useProjectStore((state) => state.setEditingProject)
    // const isTitleValid = title.trim().length > 0
    // const isDescriptionValid = description.trim().length >= 5

    const submitHandler = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTask({
            id: Date.now(),
            title,
            completed,
        })
        onClose()
    }

    return (
        <form onSubmit={submitHandler} className={`absolute ${isOpen ? "block" : "hidden"}`}>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                    onClick={() => {
                        onClose()
                    }}
                    className="absolute inset-0 bg-black/30"
                ></div>
                <div className="border-2 border-gray-100 shadow p-4 rounded-lg flex flex-col gap-4 bg-white max-w-lg w-sm z-90">
                    <FiX
                        className="text-xl cursor-pointer"
                        onClick={() => {
                            onClose()
                        }}
                    />
                    <Input
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        placeholder="عنوان" label="عنوان پروژه"
                        className={`bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full`}
                        type="text"
                        error={
                            title.trim().length === 0 ? "عنوان اجباری است" : null
                        }
                    />

                    <TextArea
                        value={description}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                        id="task"
                        name="task"
                        placeholder="توضیحات پروژه..."
                        className="bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full"
                        error={
                            description.trim().length < 5 ? "متن توضیحات باید بالای 5 کاراکتر باشد" : null
                        }
                    />

                    <div className="flex gap-2 w-full">
                        <Button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 duration-300 rounded-lg p-2 text-white cursor-pointer w-full">ذخیره</Button>
                        <Button
                            type="button"
                            onClick={() => {
                                onClose()
                            }}
                            className="bg-red-500 hover:bg-red-700 duration-300 rounded-lg p-2 text-white cursor-pointer w-full">انصراف</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default TaskForm