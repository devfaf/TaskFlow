// import DashboardPage from "../pages/DashboardPage"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router"

const DashboardLayout = () => {

  return (
    <div className="">
      <Header />
      <div>
        <Sidebar />
        <div className="mr-[256px] mt-[64px]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout