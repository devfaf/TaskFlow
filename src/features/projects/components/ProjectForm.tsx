import Input from "../../../components/common/Input"
import TextArea from "../../../components/common/TextArea"
import Select from "../../../components/common/Select"
import Button from "../../../components/common/Button"

const ProjectForm = () => {
  return (
    <div className="border-2 border-gray-100 shadow p-4 rounded-lg flex flex-col gap-4">
        <Input placeholder="عنوان" label="عنوان پروژه" className={`bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full`} type="text" />
        <TextArea id="task" name="task" placeholder="توضیحات پروژه..." className="bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full" />
        <Select className="bg-white rounded-lg p-1 border-gray-300 border-2"/>
        <div className="flex gap-2 w-full">
            <Button className="bg-blue-500 hover:bg-blue-700 duration-300 rounded-lg p-2 text-white cursor-pointer w-full">ذخیره</Button>
            <Button className="bg-red-500 hover:bg-red-700 duration-300 rounded-lg p-2 text-white cursor-pointer w-full">انصراف</Button>
        </div>
    </div>
  )
}

export default ProjectForm