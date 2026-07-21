export type Task = {
    id: number;
    projectId: number
    title: string;
    // description: string;
    // date: string;
    completed:
    | "todo"
    | "inProgress"
    | "review"
    | "done";
}

export type TaskCardProps = Task & {
    className?: string;
    children?: React.ReactElement;
}