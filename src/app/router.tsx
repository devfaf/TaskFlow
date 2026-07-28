import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import ProjectPage from "../pages/ProjectPage";
import DashboardPage from "../pages/DashboardPage";
import SettingPage from "../pages/SettingPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import OverviewPage from "../pages/OverviewPage";
import BoardPage from "../pages/BoardPage";
import TasksPage from "../pages/TasksPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoutes from "../features/projects/components/ProtectedRoutes";
import ProfilePage from "../pages/ProfilePage";


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
            {
                path: "profile",
                element: <ProfilePage />
            }
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
                index:true,
                path: "tasks",
                element: <TasksPage />
            },
        ]
    },
    {
        path: "login",
        element: <LoginPage />
    },
    {
        element: <ProtectedRoutes />,
        children: [
            {
                path: "setting",
                element: <SettingPage />
            }
        ]
    }

])
