export type ProjectStatus = "active" | "completed";
export type ProjectSort = "newest" | "oldest" | "title";

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

export const PROJECT_SORT_OPTIONS = [
    {
        value: "newest",
        label: "جدیدترین"
    },
    {
        value: "oldest",
        label: "قدیمی‌ترین"
    },
    {
        value: "title",
        label: "عنوان"
    },
]

export type Project = {
    id: number;
    title: string;
    description: string;
    date: string;
    status: ProjectStatus;
}

export type ProjectCartProps = Project & {
    className?: string;
    children?: React.ReactElement;
}
