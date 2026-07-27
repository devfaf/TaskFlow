import { SidebarItems } from "./SidebarItems";

const Sidebar = () => {
  return (
    <aside
      className="
        fixed
        right-0
        top-16
        bottom-0
        z-40
        w-64
        border-l
        border-[var(--color-border)]
        bg-white
        mt-1
      "
    >
      <div className="h-full overflow-y-auto">
        <SidebarItems />
      </div>
    </aside>
  );
};

export default Sidebar;