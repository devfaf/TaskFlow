

export type Task = {
    id: number;
    projectId?: number
    title: string;
    // description: string;
    // date: string;
    completed: boolean;
}

export type TaskCardProps = Task & {
    className?: string;
    children?: React.ReactElement;
}