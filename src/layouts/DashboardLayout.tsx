import { useEffect, useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router"
import { useThemeStore } from "../stores/themeStore"
import { useFontFamilyStore } from "../stores/fontFamily"
import { useFontSizeTheme } from "../stores/fontSizeStore"

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const theme = useThemeStore(state => state.theme)

  const fontStyle = useFontFamilyStore(state => state.font)
  const fontSize = useFontSizeTheme(state => state.fontSize)

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth

      if (currentWidth < 1024) {
        setIsSidebarOpen(false)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={`h-screen overflow-hidden theme-${theme} font-${fontStyle} text-${fontSize} app-root bg-[var(--color-background)] text-[var(--color-text-primary)] custom-scrollbar`}
    >
      <Header setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex h-full gap-2">
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <main className="lg:pr-66 flex-1 overflow-y-scroll lg:py-4 lg:mt-13 min-h-0 bg-[var(--color-background)] text-[var(--color-text-primary)]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout