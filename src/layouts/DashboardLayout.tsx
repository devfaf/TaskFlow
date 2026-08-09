import { useEffect, useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router"

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth

      if(currentWidth < 1024){
        setIsSidebarOpen(false)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={`h-screen overflow-hidden`}>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex h-full gap-2">
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <main
          className="lg:pr-66 flex-1 overflow-y-scroll lg:py-4 lg:mt-13 min-h-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout