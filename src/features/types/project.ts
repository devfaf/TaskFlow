export type Project = {
    id: number;
    title: string;
    description: string;
    date: string;
    status: "active" | "completed";
}