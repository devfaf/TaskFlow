import Input from "../../components/common/Input";
import { CiSearch } from "react-icons/ci";
import { useProjectStore } from "../../features/projects/store/projectStore";
import { useTaskStore } from "../../features/projects/store/taskStore";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { VscLayers } from "react-icons/vsc";
import { LuListTodo } from "react-icons/lu";
import { ImSpinner2 } from "react-icons/im";
import { BsXLg } from "react-icons/bs";

const SearchResults = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const projects = useProjectStore(state => state.projects)
    const tasks = useTaskStore(state => state.tasks)

    const searchProject = projects.filter(p =>
        p.title.toLowerCase().includes(debouncedQuery)
    )

    const searchTask = tasks.filter(t =>
        t.title.toLowerCase().includes(debouncedQuery)
    )

    useEffect(() => {
        setIsSearching(true)
        const timer = setTimeout(() => {
            setDebouncedQuery(searchQuery)
            setIsSearching(false)
        }, 300);

        return () => clearTimeout(timer)
    }, [searchQuery])

    const clearSearch = () => {
        setSearchQuery("");
        setDebouncedQuery("");
    };

    return (
        <div className="relative w-full lg:max-w-sm mx-6 lg:mx-0">
            <Input
                id="search"
                type="text"
                placeholder="جستجو..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<CiSearch />}
            />
            {searchQuery && (
                <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                >
                    <BsXLg />
                </button>
            )}
            {
                searchQuery &&
                <>
                    <div className="absolute top-full left-0 right-0 z-50 mt-2 max-h-[300px] overflow-y-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg p-4">
                        {
                            isSearching &&
                            <div className="flex gap-2 items-center justify-center">
                                <span>درحال جستجو...
                                </span>
                                <ImSpinner2 className="animate-spin text-lg" />
                            </div>
                        }
                        {/* project results */}
                        {searchProject.length > 0 && (
                            <div className="flex flex-col space-y-4 mb-4">

                                <div className="flex gap-1 items-center border-b border-[var(--color-border)] pb-2">
                                    <VscLayers className="text-lg text-[var(--color-text-secondary)]" />
                                    <h3 className="text-[var(--color-text-secondary)]">نتایج جستجوی پروژه ها</h3>
                                </div>
                                <div className="flex flex-col">
                                    {
                                        searchProject.map(project =>
                                            <Link
                                                to={`projects/${project.id}`}
                                                key={project.id}
                                                className="text-[var(--color-primary)] duration-200 hover:text-[var(--color-primary-light)] flex gap-2 flex-col"
                                            >
                                                <div className="flex gap-2">
                                                    {
                                                        project.title &&
                                                        <>
                                                            <span>
                                                                عنوان:
                                                            </span>

                                                            <span>
                                                                {project.title}
                                                            </span>
                                                        </>
                                                    }
                                                </div>
                                                <div className="flex gap-2">
                                                    {
                                                        project.description &&
                                                        <>
                                                            <span>
                                                                توضیحات:
                                                            </span>

                                                            <span>
                                                                {project.description}
                                                            </span>
                                                        </>
                                                    }
                                                </div>
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                        )}
                        {/* task results */}
                        {searchTask.length > 0 && (
                            <div className="flex flex-col space-y-4">
                                <div className="flex gap-1 items-center border-b border-[var(--color-border)] pb-2">
                                    <LuListTodo className="text-lg text-[var(--color-text-secondary)]" />
                                    <h3 className="text-[var(--color-text-secondary)]">نتایج جستجوی وظیفه ها</h3>
                                </div>
                                <div className="flex flex-col">
                                    {
                                        searchTask.map(task =>
                                            <Link
                                                to={`/projects/${task.projectId}/tasks`}
                                                key={task.id}
                                                className="text-[var(--color-primary)] duration-200 hover:text-[var(--color-primary-light)] flex gap-2 flex-col"
                                            >
                                                <div className="flex gap-2">
                                                    {
                                                        task.title &&
                                                        <>
                                                            <span>
                                                                عنوان:
                                                            </span>

                                                            <span>
                                                                {task.title}
                                                            </span>
                                                        </>
                                                    }
                                                </div>
                                                <div className="flex gap-2">
                                                    {
                                                        task.description &&
                                                        <>
                                                            <span>
                                                                توضیحات:
                                                            </span>

                                                            <span>
                                                                {task.description}
                                                            </span>
                                                        </>
                                                    }

                                                </div>
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                </>
            }

        </div>
    )
}

export default SearchResults