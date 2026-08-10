import Input from "../../components/common/Input";
import { CiSearch } from "react-icons/ci";
import { useProjectStore } from "../../features/projects/store/projectStore";
import { useTaskStore } from "../../features/projects/store/taskStore";
import { useState } from "react";
import { Link } from "react-router";

const SearchResults = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const projects = useProjectStore(state => state.projects)
    const tasks = useTaskStore(state => state.tasks)

    console.log(projects);
    console.log(tasks);

    const searchProject = projects.filter(p =>
        p.title.toLowerCase().includes(searchQuery)
    )

    const searchTask = tasks.filter(t =>
        t.title.toLowerCase().includes(searchQuery)
    )



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
            {
                searchQuery &&
                <div className="absolute top-full left-0 right-0 z-50 mt-2 max-h-[300px] overflow-y-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg">
                    {/* project results */}
                    <div>
                        <div>
                            <h3>نتایج جستجوی پروژه ها</h3>
                        </div>
                        <div>
                            {
                                searchProject.map(project =>
                                    <Link
                                        to={`projects/${project.id}`}
                                        key={project.id}
                                    >
                                        <span>{project.title}</span>
                                        <span>{project.description}</span>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                    {/* task results */}
                    <div>
                        <div>
                            <h3>نتایج جستجوی وظیفه ها</h3>
                        </div>
                        <div>
                            {
                                searchTask.map(task =>
                                    <Link
                                        to={`/projects/${task.projectId}/tasks`}
                                        key={task.id}
                                    >
                                        <span>{task.title}</span>
                                        <span>{task.description}</span>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default SearchResults