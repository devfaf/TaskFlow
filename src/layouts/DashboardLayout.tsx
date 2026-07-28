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

        <main className="lg:pr-64 flex-1 overflow-hidden lg:py-4 lg:mt-13">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout