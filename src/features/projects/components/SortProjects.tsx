import { CiBoxList } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";

import Select from "../../../components/common/Select";
import { PROJECT_SORT_OPTIONS } from "../../types/project";
import { useProjectStore } from "../store/projectStore";

const SortProjects = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortRef = useRef<HTMLFormElement>(null);

  const sortFilter = useProjectStore((state) => state.sortFilter);
  const setSortFilter = useProjectStore((state) => state.setSortFilter);
  const clearSortFilter = useProjectStore(
    (state) => state.clearSortFilter
  );

  const isSortActive = sortFilter !== "";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        sortRef.current &&
        !sortRef.current.contains(e.target as Node)
      ) {
        setIsSortOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const sortBtnHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSortOpen((prev) => !prev);
  };

  const sortValueHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortFilter(e.target.value);
    setIsSortOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={sortBtnHandler}
        className="
          flex items-center gap-2
          rounded-lg
          border border-[var(--color-border)]
          bg-white
          px-3 py-2
          text-sm
          text-[var(--color-text-primary)]
          cursor-pointer
          transition-all duration-200
          hover:bg-[var(--color-hover)]
        "
      >
        <CiBoxList
          className={` text-xl transition-colors duration-200 
            ${isSortActive
              ? "text-[var(--color-primary)]"
              : "text-[var(--color-text-secondary)]"
            }
  `}
        />
        <span>
          {isSortActive ? "مرتب‌سازی (1)" : "مرتب‌سازی"}
        </span>
      </button>

      {isSortOpen && (
        <form
          ref={sortRef}
          className="
            absolute
            left-0
            top-12
            z-50
            flex
            min-w-[230px]
            flex-col
            gap-4
            rounded-xl
            border border-[var(--color-border)]
            bg-white
            p-4
            shadow-lg
          "
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[var(--color-text-primary)]">
              مرتب‌سازی بر اساس
            </label>

            <Select
              value={sortFilter}
              onChange={sortValueHandler}
              options={PROJECT_SORT_OPTIONS}
            />
          </div>

          <button
            type="button"
            disabled={!isSortActive}
            onClick={() => {
              clearSortFilter();
              setIsSortOpen(false);
            }}
            className="
              self-end
              cursor-pointer
              text-sm
              text-[var(--color-text-secondary)]
              transition-colors
              duration-200
              hover:text-[var(--color-danger)]
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            پاک کردن مرتب‌سازی
          </button>
        </form>
      )}
    </div>
  );
};

export default SortProjects;