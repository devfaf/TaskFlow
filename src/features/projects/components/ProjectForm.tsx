import type { ModalProps } from "../types/modal";
import Input from "../../../components/common/Input"
import TextArea from "../../../components/common/TextArea"
import Select from "../../../components/common/Select"
import Button from "../../../components/common/Button"
import { useProjectStore } from "../store/projectStore"
import { useState } from "react";
import type { ProjectStatus } from "../../types/project";

const ProjectForm = ({ isOpen, onClose }: ModalProps) => {
  const addProject = useProjectStore((state) => state.addProject)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState<ProjectStatus>("active")

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    addProject({
      id: Date.now(),
      title,
      description,
      date: new Date().toLocaleDateString(),
      status,
    })
    onClose()
  }

  return (
    <form onSubmit={submitHandler} className={`absolute ${isOpen ? "block" : "hidden"}`}>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="border-2 border-gray-100 shadow p-4 rounded-lg flex flex-col gap-4 bg-white max-w-lg w-sm">
          <Input
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            placeholder="عنوان" label="عنوان پروژه"
            className={`bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full`}
            type="text" />

          <TextArea
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            id="task"
            name="task"
            placeholder="توضیحات پروژه..."
            className="bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full" />

          <Select
            value={status}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value as ProjectStatus)}
            className="bg-white rounded-lg p-1 border-gray-300 border-2" />

          <div className="flex gap-2 w-full">
            <Button
              onClick={addProject}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 duration-300 rounded-lg p-2 text-white cursor-pointer w-full">ذخیره</Button>
            <Button
              type="button"
              onClick={onClose}
              className="bg-red-500 hover:bg-red-700 duration-300 rounded-lg p-2 text-white cursor-pointer w-full">انصراف</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ProjectForm