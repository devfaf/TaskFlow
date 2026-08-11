import Input from "../../../components/common/Input"
import Button from "../../../components/common/Button"
import { useAuthStore } from "../../auth/authStore"
import { useNavigate } from "react-router"
import { useState } from "react"
import { ImSpinner2 } from "react-icons/im";
import "../../../styles/index.css"

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
    className="w-full max-w-md flex flex-col items-center justify-center gap-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
>
    <h2 className="py-2 text-3xl font-bold text-[var(--color-primary)]">
        فرم لاگین
    </h2>

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

    <div className="w-full pt-2">
        <Button
            type="submit"
            disabled={isLoading}
            variant="primary"
            className="w-full"
        >
            {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                    <span>درحال ورود به پنل کاربری...</span>
                    <ImSpinner2 className="animate-spin text-lg" />
                </div>
            ) : (
                <span>ورود | ثبت نام</span>
            )}
        </Button>
    </div>
</form>
    )
}

export default Login