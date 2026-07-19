import { CiFilter } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import Select from "../../../components/common/Select";
import { PROJECT_STATUS_OPTIONS } from "../../types/project";
import { useProjectStore } from "../store/projectStore";


const FilterProjects = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const filterRef = useRef<HTMLFormElement>(null)
    const statusFilter = useProjectStore(state => state.statusFilter)
    const setStatusFilter = useProjectStore(state => state.setStatusFilter)
    const clearStatusFilter = useProjectStore(state => state.clearStatusFilter)
    const isFilterActive = statusFilter !== "all"

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
                setIsFilterOpen(false)
            }

        }
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }

    }, [])

    const filterBtnHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsFilterOpen(prev => !prev)
    }

    const selectValueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatusFilter(e.target.value)
        setIsFilterOpen(false)
    }


    return (
        <div>
            <div onClick={filterBtnHandler} className="flex gap-1 items-center cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg outline-transparent duration-200 py-1 px-2">
                <CiFilter className="text-2xl" />
                <span>فیلتر</span>
            </div>
            <div>
                {
                    isFilterOpen &&
                    <div className="relative">
                        <form ref={filterRef} className="flex flex-col items-start bg-gray-100 py-2 px-4 rounded-lg absolute top-1 border-2 border-gray-300 whitespace-nowrap" action="">
                            <div className="flex gap-2 items-center w-full">
                                <Select
                                    onChange={selectValueHandler}
                                    value={statusFilter}
                                    options={PROJECT_STATUS_OPTIONS} />
                            </div>
                            <div>
                                <span onClick={clearStatusFilter} className={`text-sm duration-200 ${isFilterActive? 'text-gray-500 hover:text-red-500 cursor-pointer' : 'text-gray-400 cursor-not-allowed opacity-50'}`}>پاک کردن فیلتر</span>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}

export default FilterProjects