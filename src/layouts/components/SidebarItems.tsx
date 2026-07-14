import { NavLink } from "react-router"
import { sidebarItemsLinks } from "../types/sidebarItemsLinks"

export const SidebarItems = () => {
    return (
        <ul className="flex flex-col gap-2 p-4 w-full ">
            {sidebarItemsLinks.map((item) => {
                const Icon = item.icon
                return (
                    <li key={item.path}>
                        <NavLink to={item.path} className={({isActive}) => 
                            `rounded-lg p-1 flex items-center gap-2 hover:bg-gray-300 w-full bg-gray-200 ${isActive ? `bg-gray-300` : ``}`
                        }>
                            <Icon className="text-2xl" />
                            {item.title}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}
