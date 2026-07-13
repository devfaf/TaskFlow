import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
    },
    {
        path: "/projects",
        element: <DashboardLayout />,
    },
])
