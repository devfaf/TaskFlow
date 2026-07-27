import { NavLink } from "react-router";
import { sidebarItemsLinks } from "../types/sidebarItemsLinks";

export const SidebarItems = () => {
  return (
    <ul className="flex flex-col gap-2 p-4">
      {sidebarItemsLinks.map((item) => {
        const Icon = item.icon;

        return (
          <li key={item.path}>
            <NavLink
              to={item.path}
                className={({ isActive }) => `
                flex items-center gap-2
                rounded-lg
                px-4
                py-2.5
                text-base
                font-medium
                transition-all
                duration-200
                cursor-pointer

                ${
                    isActive
                    ? "bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-hover)] hover:text-[var(--color-text-primary)]"
                }
                `}
            >
              <Icon className="text-xl shrink-0" />

              <span>{item.title}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};