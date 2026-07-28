import { Link } from "react-router";
import { CiLogin, CiSearch } from "react-icons/ci";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

import { useProjectStore } from "../../features/projects/store/projectStore";
import ProjectForm from "../../features/projects/components/ProjectForm";
import { CiMenuBurger } from "react-icons/ci";

type HeaderProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({isSidebarOpen, setIsSidebarOpen}: HeaderProps) => {
  const isModalOpen = useProjectStore((state) => state.isModalOpen);
  const openModal = useProjectStore((state) => state.openModal);
  const closeModal = useProjectStore((state) => state.closeModal);

  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <header
        className="
          lg:fixed
          top-0
          z-50
          flex
          w-full
          flex-col
          lg:flex-row
          items-center
          justify-between
          border-b
          border-[var(--color-border)]
          bg-white
          px-6
          py-3
          gap-3
        "
      >
        <div className="flex justify-between w-full">
          <Link to="/">
            <img
              src="/logo/logo.webp"
              alt="لوگوی تسک فلو"
              className="w-30"
            />
          </Link>
          <div className="flex items-center gap-3">

            <Button
              variant="primary"
              onClick={openModal}
              className="min-w-32"
            >
              اضافه کردن
            </Button>

            <Link to="/login">
              <Button variant="secondary" className="lg:min-w-32 w-full">
                <CiLogin className="text-xl" />
                <span className="hidden lg:inline">ورود | ثبت‌نام</span>
              </Button>
            </Link>
            <Button
              variant="secondary"
              onClick={openSidebar}
              className="lg:hidden"
            >
              <CiMenuBurger className="text-xl" />
            </Button>

          </div>
        </div>

        <div className="w-full lg:max-w-sm mx-6 lg:mx-0">
          <Input
            id="search"
            type="text"
            placeholder="جستجو..."
            icon={<CiSearch />}
          />
        </div>
      </header>

      <ProjectForm
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        فرم افزودن پروژه
      </ProjectForm>
    </>
  );
};

export default Header;