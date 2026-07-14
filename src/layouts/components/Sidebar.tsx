import { SidebarItems } from "./SidebarItems"

const Sidebar = () => {
  return (
    <aside className="w-3xs z-40 bg-white border border-gray-300 shadow-lg overflow-y-auto bottom-0 top-0 flex pt-16 fixed">
      <div className="fixed w-3xs">
        <div className="">
          <SidebarItems />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar