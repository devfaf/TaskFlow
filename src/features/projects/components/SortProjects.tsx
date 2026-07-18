import { CiBoxList } from "react-icons/ci";
import Select from "../../../components/common/Select";
import { useProjectStore } from "../store/projectStore";
import { PROJECT_SORT_OPTIONS } from "../../types/project";
import { useEffect, useRef, useState } from "react";

const SortProjects = () => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const sortRef = useRef<HTMLFormElement>(null);
    const sortFilter = useProjectStore(state => state.sortFilter)
    const setSortFilter = useProjectStore(state => state.setSortFilter)

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
                setIsSortOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const sortBtnHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsSortOpen(prev => !prev)
    }

    const sortValueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortFilter(e.target.value)
        setIsSortOpen(false)
    }

    return (
        <div>
            <div onClick={sortBtnHandler} className="flex gap-1 items-center cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg outline-transparent duration-200 py-1 px-2">
                <CiBoxList className="text-2xl" />
                <span>مرتب‌سازی</span>
            </div>
            <div>
                {
                    isSortOpen && <div className="relative">
                        <form ref={sortRef} className="flex flex-col items-start bg-gray-100 py-2 px-4 rounded-lg absolute top-1 border-2 border-gray-300 whitespace-nowrap" action="">
                            <div className="flex gap-2 items-center w-full">
                                <Select
                                    onChange={sortValueHandler}
                                    value={sortFilter}
                                    options={PROJECT_SORT_OPTIONS} />
                            </div>
                            <div>
                                <span className="text-gray-400 ">پاک کردن فیلتر</span>
                            </div>
                        </form>
                    </div>

                }

            </div>
        </div>
    )
}

export default SortProjects