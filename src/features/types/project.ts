export type ProjectStatus = "active" | "completed";

export const PROJECT_STATUS_OPTIONS = [
    {
        value: "all",
        label: "همه"
    },
    {
        value: "active",
        label: "فعال"
    },
    {
        value: "completed",
        label: "تکمیل شده"
    },
]

export type Project = {
    id: number;
    title: string;
    description: string;
    date: string;
    status: ProjectStatus;
    className?: string;
    children?: React.ReactElement;
}