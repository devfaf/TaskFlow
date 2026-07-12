import { useEffect, useState } from "react";
import type { ModalProps } from "../../../components/types/modal"
import Input from "../../../components/common/Input"
import TextArea from "../../../components/common/TextArea"
import Select from "../../../components/common/Select"
import Button from "../../../components/common/Button"
import { useProjectStore } from "../store/projectStore"
import type { ProjectStatus } from "../../types/project";
// icons
import { FiX } from "react-icons/fi";

const ProjectForm = ({ isOpen, onClose }: ModalProps) => {
  const addProject = useProjectStore((state) => state.addProject)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState<ProjectStatus>("active")
  // const [errorMessage, setErrorMessage] = useState("")
  const editingProject = useProjectStore((state) => state.editingProject)
  const updateProject = useProjectStore((state) => state.updateProject)
  const setEditingProject = useProjectStore((state) => state.setEditingProject)
  const isTitleValid = title.trim().length > 0
  const isDescriptionValid = description.trim().length >= 5

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isTitleValid || !isDescriptionValid) {
      return;
    }

    if (editingProject) {
      updateProject({
        id: editingProject.id,
        title,
        description,
        date: editingProject.date,
        status,
      })
    } else {
      addProject({
        id: Date.now(),
        title,
        description,
        date: new Date().toLocaleDateString(),
        status,
      })
    }
    onClose()
    setEditingProject(null)
    setTitle("")
    setDescription("")
    setStatus("active")

  }

  useEffect(() => {
    if (editingProject) {
      setTitle(editingProject.title)
      setDescription(editingProject.description)
      setStatus(editingProject.status)
    }
  }, [editingProject])

  // useEffect(() => {
  //   if(description.length > 5){
  //     setErrorMessage('متن توضیحات باید بالای 5 کاراکتر باشد')
  //   }
  // }, [description])

  return (
    <form onSubmit={submitHandler} className={`absolute ${isOpen ? "block" : "hidden"}`}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          onClick={() => {
            onClose()
            setEditingProject(null)
          }}
          className="absolute inset-0 bg-black/30"
        ></div>
        <div className="border-2 border-gray-100 shadow p-4 rounded-lg flex flex-col gap-4 bg-white max-w-lg w-sm z-90">
          <FiX
            className="text-xl cursor-pointer"
            onClick={() => {
              onClose()
              setEditingProject(null)
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

          <Select
            value={status}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value as ProjectStatus)}
            className="bg-white rounded-lg p-1 border-gray-300 border-2" />

          <div className="flex gap-2 w-full">
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 duration-300 rounded-lg p-2 text-white cursor-pointer w-full">ذخیره</Button>
            <Button
              type="button"
              onClick={() => {
                onClose()
                setEditingProject(null)
              }}
              className="bg-red-500 hover:bg-red-700 duration-300 rounded-lg p-2 text-white cursor-pointer w-full">انصراف</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ProjectForm