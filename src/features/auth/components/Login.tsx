import Input from "../../../components/common/Input"
import Button from "../../../components/common/Button"
import { useAuthStore } from "../../auth/authStore"
import { useNavigate } from "react-router"
import { useState } from "react"
import { ImSpinner2 } from "react-icons/im";

const Login = () => {
    const login = useAuthStore(state => state.login)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = (e: React.SubmitEvent) => {
        e.preventDefault()

        setIsLoading(true)

        setTimeout(() => {
            login()
            navigate("/profile")
        }, 700);
    }

    return (
        <form
            onSubmit={submitHandler}
            action=""
            className="bg-gray-100 w-md border-gray-300 border flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
            <h2 className="text-2xl font-bold">فرم لاگین</h2>
            <div className="w-full">
                <Input
                id="email"
                    placeholder="ایمیل"
                    label="ایمیل"
                    type="email"
                />
            </div>
            <div className="w-full">
                <Input
                    placeholder="پسورد"
                    label="پسورد"
                    type="password"
                    
                />
            </div>
            <div className="w-full">
                <Button
                    type="submit"
                    disabled={isLoading}
                    variant="primary">

                    {
                        isLoading ? (
                            <div className="flex gap-2 items-center justify-center">
                                <span>درحال ورود به پنل کاربری...
                                </span>
                                    <ImSpinner2 className="animate-spin text-lg" />
                            </div>
                        ) : (
                            <span>ورود | ثبت نام</span>
                        )
                    }
                </Button>
            </div>
        </form>
    )
}

export default Login