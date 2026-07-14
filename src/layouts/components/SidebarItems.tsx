import { NavLink } from "react-router"
import { sidebarItemsLinks } from "../types/sidebarItemsLinks"

export const SidebarItems = () => {
    return (
        <ul>
            {sidebarItemsLinks.map((item) => (
                <li key={item.path}>
                    <NavLink to={item.path}>{item.title}</NavLink>
                </li>
            ))}
        </ul>
    )
}
