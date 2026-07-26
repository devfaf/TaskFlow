import Input from "../../../components/common/Input"
import Button from "../../../components/common/Button"
import { useAuthStore } from "../../auth/authStore"
import { useNavigate } from "react-router"

const Login = () => {
    const login = useAuthStore(state => state.login)
    const navigate = useNavigate()

    const submitHandler = (e: React.SubmitEvent) => {
        e.preventDefault()

        login()

        navigate("/profile")
    }

    return (
            <form
                onSubmit={submitHandler}
                action=""
                className="bg-gray-100 w-md border-gray-300 border flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
                <h2 className="text-2xl font-bold">فرم لاگین</h2>
                <div className="w-full">
                    <Input
                        placeholder="ایمیل"
                        label="ایمیل"
                        type="email"
                        className={`bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full`}
                    />
                </div>
                <div className="w-full">
                    <Input
                        placeholder="پسورد"
                        label="پسورد"
                        type="password"
                        className={`bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full`}
                    />
                </div>
                <div className="w-full">
                    <Button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 duration-300 rounded-lg p-2 text-white cursor-pointer w-full">ثبت نام</Button>
                </div>
            </form>
    )
}

export default Login