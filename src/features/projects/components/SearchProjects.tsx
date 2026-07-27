import Input from "../../../components/common/Input"
import { useProjectStore } from "../store/projectStore"
import { CiSearch } from "react-icons/ci";

const SearchProjects = () => {
    const setSearch = useProjectStore((state) => state.setSearch)

    return (
        <div>
            <Input 
            placeholder="عنوان پروژه را جستچو کنید" type="text" 
            onChange={(e) => setSearch(e.target.value)}
            className="w-sm"
            icon={<CiSearch />}
            />
        </div>
    )
}

export default SearchProjects