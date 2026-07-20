import type { ProjectStatus } from "./project";

export type Task = {
    id: number;
    projectId: number
    title: string;
    // description: string;
    // date: string;
    completed: ProjectStatus;
}

export type TaskCardProps = Task & {
    className?: string;
    children?: React.ReactElement;
}