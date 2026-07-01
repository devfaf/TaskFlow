import ProjectCard from "./ProjectCard"

const ProjectList = () => {
    // const [data, setData] = useState([])
    let projects: ProjectCardProps[] = [
        {
            id: 1,
            title: 'project 1',
            description: 'this is a project about React js',
            date: '12/04/2026',
            status: 'active',
        },
        {
            id: 2,
            title: 'project 2',
            description: 'this is a project about React js',
            date: '08/04/2026',
            status: 'completed',
        },
        {
            id: 3,
            title: 'project 3',
            description: 'this is a project about React js',
            date: '06/04/2026',
            status: 'active',
        }
    ]

    return (
        <div>
            {
                projects && projects.map((item) => {
                    return (
                        <ProjectCard
                            key={item.id}
                            {...item}
                            className="shadow p-2 rounded-lg w-md flex justify-center items-center flex-col gap-2"
                        />
                    )
                })
            }
        </div>
    )
}

export default ProjectList