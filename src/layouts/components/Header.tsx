import { Link } from "react-router";
import { CiLogin, CiSearch } from "react-icons/ci";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

import { useProjectStore } from "../../features/projects/store/projectStore";
import ProjectForm from "../../features/projects/components/ProjectForm";

const Header = () => {
  const isModalOpen = useProjectStore((state) => state.isModalOpen);
  const openModal = useProjectStore((state) => state.openModal);
  const closeModal = useProjectStore((state) => state.closeModal);

  return (
    <>
      <header
        className="
          fixed
          top-0
          z-50
          flex
          w-full
          items-center
          justify-between
          border-b
          border-[var(--color-border)]
          bg-white
          px-6
          py-3
        "
      >
        {/* Logo */}
        <Link to="/">
          <img
            src="/logo/logo.webp"
            alt="لوگوی تسک فلو"
            className="w-30"
          />
        </Link>

        {/* Search */}
        <div className="w-full max-w-sm mx-6">
          <Input
            id="search"
            type="text"
            placeholder="جستجو..."
            icon={<CiSearch />}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <Button
            variant="primary"
            onClick={openModal}
          >
            اضافه کردن
          </Button>

          <Link to="/login">
            <Button variant="secondary">
              <CiLogin className="text-xl" />
              ورود | ثبت‌نام
            </Button>
          </Link>

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