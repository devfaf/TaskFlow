import Input from "../../../components/common/Input"
import { useProjectStore } from "../store/projectStore"

const SearchProjects = () => {
    const setSearch = useProjectStore((state) => state.setSearch)
    
    return (
        <div>
            <div>
                <Input className={`bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full w-sm`} placeholder="عنوان پروژه را جستچو کنید" type="text" onChange={(e) => setSearch(e.target.value)} />
            </div>
        </div>
    )
}

export default SearchProjects