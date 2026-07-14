import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import Select from "../../components/common/Select"
import { useProjectStore } from "../../features/projects/store/projectStore"
import ProjectForm from "../../features/projects/components/ProjectForm"
const Header = () => {
  const isModalOpen = useProjectStore((state) => state.isModalOpen)
  const closeModal = useProjectStore((state) => state.closeModal)
  const openModal = useProjectStore((state) => state.openModal)


  return (
    <header className="flex gap-4 mx-auto p-3 border-b border-gray-300 z-50 bg-white fixed w-full top-0">
      <div className="flex flex-col lg:flex-row lg:justify-end items-center gap-6 w-full">
        <div className="flex gap-6 w-full items-center justify-between lg:justify-start">
          <h1>TaskFlow</h1>
          <Select showAll={true} />
          <Button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 duration-300 rounded-lg p-2 text-white cursor-pointer">
            اضافه کردن
          </Button>
        </div>
        <Input className={`bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full`} type="text" />

      </div>
      <ProjectForm isOpen={isModalOpen} onClose={closeModal}>
        فرم افزودن پروژه
      </ProjectForm>
    </header>
  )
}

export default Header