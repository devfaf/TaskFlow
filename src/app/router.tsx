import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import ProjectPage from "../pages/ProjectPage";
import DashboardPage from "../pages/DashboardPage";
import SettingPage from "../pages/SettingPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "projects",
                element: <ProjectPage />
            },
            {
                path: "setting",
                element: <SettingPage />
            },
        ]
    },

])
