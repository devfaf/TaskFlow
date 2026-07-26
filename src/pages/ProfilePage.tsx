import { useAuthStore } from "../features/auth/authStore"
import Button from "../components/common/Button"
import { Link } from "react-router"

const ProfilePage = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  return (
    <div>
      {
        isAuthenticated ? (
          <div className="flex flex-col gap-4">
            <span>اسم</span>
            <span>ایمیل</span>
            <span>رمز</span>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <Button className="bg-blue-500 p-2 rounded-lg">ثبت نام</Button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default ProfilePage