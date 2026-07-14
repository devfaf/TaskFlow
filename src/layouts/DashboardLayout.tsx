import DashboardPage from "../pages/DashboardPage"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router"

const DashboardLayout = () => {

  return (
    <div className="">
      <Header />
      <div className="flex">
        <Sidebar />
        <DashboardPage />
      </div>
    </div>
  )
}

export default DashboardLayout