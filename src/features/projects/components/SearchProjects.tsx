import Input from "../../../components/common/Input"
import { useProjectStore } from "../store/projectStore"
import { CiSearch } from "react-icons/ci";

const SearchProjects = () => {
    const setSearch = useProjectStore((state) => state.setSearch)
    
    return (
        <div>
            <div className="bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-sm flex items-center gap-2 text-center">
                <CiSearch className="text-xl cursor-pointer" />
                <Input className="placeholder:text-sm px-2 w-full outline-none" placeholder="عنوان پروژه را جستچو کنید" type="text" onChange={(e) => setSearch(e.target.value)} />
            </div>
        </div>
    )
}

export default SearchProjects