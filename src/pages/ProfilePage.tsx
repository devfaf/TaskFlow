import { useAuthStore } from "../features/auth/authStore"
import Button from "../components/common/Button"
import { Link } from "react-router"


const ProfilePage = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  return (
    <div>
      {
        isAuthenticated ? (
          <div className="flex flex-col gap-4 items-center mt-30">
            <span className="bg-gray-100 w-lg rounded-lg p-2">اسم</span>
            <span className="bg-gray-100 w-lg rounded-lg p-2">ایمیل</span>
            <span className="bg-gray-100 w-lg rounded-lg p-2">رمز</span>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <Button variant="primary">ثبت نام</Button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default ProfilePage