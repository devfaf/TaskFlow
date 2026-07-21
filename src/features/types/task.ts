export type TaskStatus = 
    | "todo"
    | "inProgress"
    | "review"
    | "done";

export type Task = {
    id: number;
    projectId: number
    title: string;
    // description: string;
    // date: string;
    status: TaskStatus;
}

export type TaskCardProps = Task & {
    className?: string;
    children?: React.ReactElement;
}