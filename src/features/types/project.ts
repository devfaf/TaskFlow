export type ProjectStatus = "active" | "completed";

export type Project = {
    id: number;
    title: string;
    description: string;
    date: string;
    status: ProjectStatus
}