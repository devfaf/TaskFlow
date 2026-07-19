import type { ProjectStatus } from "./project";

export type Task = {
    id: number;
    title: string;
    description: string;
    date: string;
    status: ProjectStatus;
    className?: string;
    children?: React.ReactElement;
}