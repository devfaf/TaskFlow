import { useAuthStore } from "../../auth/authStore"
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace />
    )
  )
}

export default ProtectedRoutes