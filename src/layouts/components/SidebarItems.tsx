import { NavLink } from "react-router"
import { sidebarItemsLinks } from "../types/sidebarItemsLinks"

export const SidebarItems = () => {
    return (
        <ul className="flex flex-col gap-2 p-4 w-full ">
            {sidebarItemsLinks.map((item) => {
                const Icon = item.icon
                return (
                    <li key={item.path} className="bg-gray-200 w-full p-1 rounded-lg hover:bg-gray-300">
                        <NavLink to={item.path} className="flex items-center gap-2">
                            <Icon className="text-2xl" />
                            {item.title}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}
