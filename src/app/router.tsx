import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import ProjectPage from "../pages/ProjectPage";
import DashboardPage from "../pages/DashboardPage";
import SettingPage from "../pages/SettingPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import OverviewPage from "../pages/OverviewPage";
import BoardPage from "../pages/BoardPage";
import TasksPage from "../pages/TasksPage";

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
    {
        path: "projects/:id",
        element: <ProjectDetailsPage />,
        children: [
            {
                index: true,
                path: "overview",
                element: <OverviewPage />
            },
            {
                path: "board",
                element: <BoardPage />
            },
            {
                path: "tasks",
                element: <TasksPage />
            },
        ]
    }

])
