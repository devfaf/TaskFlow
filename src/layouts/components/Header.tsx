import { Link } from "react-router"
import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import { useProjectStore } from "../../features/projects/store/projectStore"
import ProjectForm from "../../features/projects/components/ProjectForm"
import { CiLogin } from "react-icons/ci";
import { useAuthStore } from "../../features/auth/authStore"
import { CiSearch } from "react-icons/ci";


const Header = () => {
  const isModalOpen = useProjectStore((state) => state.isModalOpen)
  const closeModal = useProjectStore((state) => state.closeModal)
  const openModal = useProjectStore((state) => state.openModal)
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const logout = useAuthStore(state => state.logout)

  const logoutHandler = () => {
    logout()


  }

  return (
    <header className="flex gap-4 mx-auto p-3 border-b border-gray-300 z-50 bg-white fixed w-full top-0">
      <div className="flex flex-col lg:flex-row lg:justify-end items-center gap-6 w-full">
        <div className="flex gap-6 w-full items-center justify-between lg:justify-start">
          <div>
            <Link to="/">
              <img src="/logo/logo.webp" className="w-30" alt="لوگوی تسک فلو" />
            </Link>
          </div>
          <Button
            onClick={openModal}
            variant="primary">
            اضافه کردن
          </Button>
        </div>

        <div className="flex gap-4 w-full justify-end items-center">
          <div className="flex gap-2 items-center">
            {
              isAuthenticated ? (
                <div className="relative group">
                  <Link to="profile">
                    <div className="bg-white w-10 h-10 flex items-end overflow-hidden justify-center rounded-full border-2 border-gray-300">
                      <img src="/user/user-profile.png" alt="عکس پروفایل کاربر" className="w-7" />
                    </div>
                  </Link>
                  <div className="bg-white p-4 rounded-lg absolute border-2 border-gray-300 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <Button className="bg-blue-500 p-2 text-white rounded-lg cursor-pointer" onClick={logoutHandler}>logout</Button>
                  </div>

                </div>
              ) : (
                <Link to="login">
                  <div className="flex gap-2 p-2 rounded-lg bg-gray-200 duration-200 hover:bg-gray-50 cursor-pointer">
                    <CiLogin className="text-3xl" />
                    <span>ورود | ثبت نام</span>
                  </div>
                </Link>
              )
            }
          </div>

          <div>

            <Input
              id="search"
              type="text"
              placeholder="جستجو"
              icon={<CiSearch />}
            />

          </div>
        </div>

      </div >
      <ProjectForm isOpen={isModalOpen} onClose={closeModal}>
        فرم افزودن پروژه
      </ProjectForm>
    </header >
  )
}

export default Header