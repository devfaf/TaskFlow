import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import ProjectPage from "../pages/ProjectPage";
import DashboardPage from "../pages/DashboardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                path: "projects",
                element: <ProjectPage />
            },
        ]
    },
    {
        path: "dashboard",
        element: <DashboardPage />,
    },
])
