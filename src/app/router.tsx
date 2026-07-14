import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import ProjectList from "../features/projects/components/ProjectList";
import EmptyState from "../components/common/EmptyState";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                path: "projects",
                element: <ProjectList />
            },
            {
                path: "EmptyState",
                element: <EmptyState />
            }
        ]
    },
    {
        path: "/projects",
        element: <DashboardLayout />,
    },
])
