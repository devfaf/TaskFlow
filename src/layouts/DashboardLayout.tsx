import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router"

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className={``}>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <main className="flex-1 pr-64 overflow-hidden py-4 mt-13">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout