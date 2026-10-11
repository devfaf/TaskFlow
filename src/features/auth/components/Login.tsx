import Input from "../../../components/common/Input"
import Button from "../../../components/common/Button"
import { useAuthStore } from "../../auth/authStore"
import { useNavigate } from "react-router"
import { useState } from "react"
import { ImSpinner2 } from "react-icons/im"
import { FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import "../../../styles/index.css"

const Login = () => {
    const login = useAuthStore((state) => state.login)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = (e: React.SubmitEvent) => {
        e.preventDefault()

        setIsLoading(true)

        setTimeout(() => {
            login()
            navigate("/profile")
        }, 700)
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-bg)] px-4 py-10">
            <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[var(--color-primary)] opacity-20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[var(--color-primary)] opacity-10 blur-3xl" />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                }}
            />

            <form
                onSubmit={submitHandler}
                className="relative z-10 flex w-full max-w-md flex-col items-center gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/80 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-500 hover:shadow-[var(--color-primary)]/10"
            >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-2xl font-black text-white shadow-lg shadow-[var(--color-primary)]/40">
                    پ
                </div>

                <div className="flex flex-col items-center gap-1 pb-2 text-center">
                    <h2 className="text-3xl font-extrabold text-[var(--color-primary)]">
                        خوش آمدید 👋
                    </h2>
                    <p className="text-sm text-[var(--color-text-muted,theme(colors.gray.500))]">
                        برای ورود به پنل کاربری، اطلاعات خود را وارد کنید
                    </p>
                </div>

                <div className="group relative w-full">
                    <FiMail className="pointer-events-none absolute top-1/2 right-3 z-10 -translate-y-1/2 text-lg text-[var(--color-primary)] opacity-60 transition group-focus-within:opacity-100" />
                    <Input
                        id="email"
                        placeholder="ایمیل"
                        label="ایمیل"
                        type="email"
                    />
                </div>
                <div className="group relative w-full">
                    <FiLock className="pointer-events-none absolute top-1/2 right-3 z-10 -translate-y-1/2 text-lg text-[var(--color-primary)] opacity-60 transition group-focus-within:opacity-100" />
                    <Input
                        placeholder="پسورد"
                        label="پسورد"
                        type="password"
                    />
                </div>

                <div className="flex w-full items-center justify-between text-sm">
                    <label className="flex cursor-pointer items-center gap-2 text-[var(--color-text-muted,theme(colors.gray.500))] select-none">
                        <input
                            type="checkbox"
                            className="h-4 w-4 cursor-pointer rounded border-[var(--color-border)] accent-[var(--color-primary)]"
                        />
                        مرا به خاطر بسپار
                    </label>

                    <button
                        type="button"
                        className="font-medium text-[var(--color-primary)] transition hover:opacity-80"
                    >
                        فراموشی رمز عبور؟
                    </button>
                </div>

                <div className="w-full pt-2">
                    <Button
                        type="submit"
                        disabled={isLoading}
                        variant="primary"
                        className="w-full transition-transform duration-200 active:scale-[0.98]"
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center gap-2">
                                <ImSpinner2 className="animate-spin text-lg" />
                                <span>در حال ورود به پنل کاربری...</span>
                            </div>
                        ) : (
                            <span className="flex items-center justify-center gap-2">
                                ورود | ثبت نام
                                <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                            </span>
                        )}
                    </Button>
                </div>

                <div className="flex w-full items-center gap-3 py-1">
                    <span className="h-px flex-1 bg-[var(--color-border)]" />
                    <span className="text-xs text-[var(--color-text-muted,theme(colors.gray.500))]">
                        یا
                    </span>
                    <span className="h-px flex-1 bg-[var(--color-border)]" />
                </div>

                <p className="text-sm text-[var(--color-text-muted,theme(colors.gray.500))]">
                    حساب کاربری ندارید؟{" "}
                    <button
                        type="button"
                        onClick={() => navigate("/register")}
                        className="font-bold text-[var(--color-primary)] transition hover:opacity-80"
                    >
                        ثبت‌نام کنید
                    </button>
                </p>
            </form>
        </div>
    )
}

export default Login