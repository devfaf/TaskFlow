import { CiFilter } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import Select from "../../../components/common/Select";
import { PROJECT_FILTER_OPTIONS } from "../../types/project";
import { useProjectStore } from "../store/projectStore";

const FilterProjects = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterRef = useRef<HTMLFormElement>(null);

  const statusFilter = useProjectStore((state) => state.statusFilter);
  const setStatusFilter = useProjectStore((state) => state.setStatusFilter);
  const clearStatusFilter = useProjectStore(
    (state) => state.clearStatusFilter
  );

  const isFilterActive = statusFilter !== "all";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(e.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filterBtnHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFilterOpen((prev) => !prev);
  };

  const selectValueHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStatusFilter(e.target.value);
    setIsFilterOpen(false);
  };

  return (
    <div className="relative">

      <button
        type="button"
        onClick={filterBtnHandler}
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
        <CiFilter
          className={`
          text-xl
          shrink-0
          transition-colors
          duration-200
          ${isFilterActive
              ? "text-[var(--color-primary)]"
              : "text-[var(--color-text-secondary)]"
            }
          `}
        />
        <span>
          {isFilterActive ? "فیلتر" : "فیلتر"}
        </span>
      </button>

      {isFilterOpen && (
        <form
          ref={filterRef}
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
              وضعیت پروژه
            </label>

            <Select
              value={statusFilter}
              onChange={selectValueHandler}
              options={PROJECT_FILTER_OPTIONS}
            />

          </div>

          <button
            type="button"
            disabled={!isFilterActive}
            onClick={() => {
              clearStatusFilter();
              setIsFilterOpen(false);
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
            پاک کردن فیلتر
          </button>
        </form>
      )}
    </div>
  );
};

export default FilterProjects;