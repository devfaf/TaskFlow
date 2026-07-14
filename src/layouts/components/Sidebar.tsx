import { SidebarItems } from "./SidebarItems"

const Sidebar = () => {
  return (
    <aside className="w-3xs z-40 bg-gray-200 shadow-lg overflow-y-auto bottom-0 top-0 flex pt-20 fixed">
      <div className="fixed">
          <SidebarItems />
      </div>
    </aside>
  )
}

export default Sidebar