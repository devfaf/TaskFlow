import Input from "../../../components/common/Input"
import Button from "../../../components/common/Button"
import { useAuthStore } from "../../auth/authStore"
import { useNavigate } from "react-router"
import { useState } from "react"
import { ImSpinner2 } from "react-icons/im"
import {
    FiMail,
    FiLock,
    FiUser,
    FiArrowLeft,
    FiShield,
    FiEye,
    FiEyeOff,
} from "react-icons/fi"
import "../../../styles/index.css"

const Login = () => {
    const login = useAuthStore((state) => state.login)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [mode, setMode] = useState<"login" | "register">("login")
    const [showPass, setShowPass] = useState(false)

    const submitHandler = (e: React.SubmitEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            login()
            navigate("/profile")
        }, 700)
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-[var(--color-card)] shadow-xl lg:grid-cols-2">

                <div
                    className="relative hidden flex-col justify-between p-10 text-white lg:flex"
                    style={{
                        background:
                            "linear-gradient(135deg, #7372FC 0%, #5959F6 55%, #4a49d6 100%)",
                    }}
                >
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(120% 80% at 100% 0%, rgba(255,255,255,0.22) 0%, transparent 55%), radial-gradient(80% 60% at 0% 100%, rgba(0,0,0,0.28) 0%, transparent 60%)",
                        }}
                    />

                    <div className="relative flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/25">
                            <FiShield className="text-xl" />
                        </div>
                        <span className="text-lg font-bold">پنل کاربری</span>
                    </div>

                    <div className="relative flex flex-col gap-4">
                        <h3 className="text-3xl font-extrabold leading-snug">
                            به پنل کاربری خود خوش آمدید
                        </h3>
                        <p className="max-w-sm text-sm leading-relaxed text-white/85">
                            با ورود به حساب کاربری، به تمام امکانات و
                            سرویس‌های اختصاصی دسترسی خواهید داشت.
                        </p>
                    </div>

                    <div className="relative flex items-center gap-2 text-xs text-white/75" />

                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-white/20" />
                    <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full border border-white/12" />
                    <div className="pointer-events-none absolute -top-16 -right-10 h-52 w-52 rounded-full border border-white/20" />
                    <div className="pointer-events-none absolute -top-8 right-2 h-32 w-32 rounded-full border border-white/12" />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <div className="mb-6 flex flex-col items-center gap-2 text-center lg:hidden">
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[var(--color-primary)] text-xl font-bold text-white">
                            <FiShield className="text-2xl" />
                        </div>
                        <h2 className="mt-2 text-2xl font-bold text-[var(--color-text-primary)]">
                            {mode === "login" ? "ورود به حساب" : "ساخت حساب جدید"}
                        </h2>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                            {mode === "login"
                                ? "برای ادامه، اطلاعات خود را وارد کنید"
                                : "برای ثبت‌نام، اطلاعات زیر را تکمیل کنید"}
                        </p>
                    </div>

                    <div className="mb-8 hidden flex-col gap-2 lg:flex">
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
                            {mode === "login" ? "ورود به حساب" : "ساخت حساب جدید"}
                        </h2>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                            {mode === "login"
                                ? "برای ادامه، اطلاعات خود را وارد کنید"
                                : "برای ثبت‌نام، اطلاعات زیر را تکمیل کنید"}
                        </p>
                    </div>

                    <form onSubmit={submitHandler} className="flex flex-col gap-5">
                        {mode === "register" && (
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                label="نام و نام خانوادگی"
                                placeholder="نام و نام خانوادگی"
                                icon={<FiUser />}
                            />
                        )}

                        <Input
                            id="email"
                            name="email"
                            type="email"
                            label="ایمیل"
                            placeholder="ایمیل"
                            icon={<FiMail />}
                        />

                        <div className="relative">
                            <Input
                                id="password"
                                name="password"
                                type={showPass ? "text" : "password"}
                                label="پسورد"
                                placeholder="پسورد"
                                icon={<FiLock />}
                                className="pl-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass((s) => !s)}
                                className="absolute left-3 top-[2.55rem] z-10 text-lg text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                            >
                                {showPass ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>

                        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                            <label className="flex cursor-pointer select-none items-center gap-2 text-[var(--color-text-secondary)]">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 cursor-pointer accent-[var(--color-primary)]"
                                />
                                مرا به خاطر بسپار
                            </label>
                            <button
                                type="button"
                                className="self-start font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-light)] sm:self-auto"
                            >
                                فراموشی رمز؟
                            </button>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            variant="primary"
                            className="w-full gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <ImSpinner2 className="animate-spin text-lg" />
                                    <span>در حال ورود...</span>
                                </>
                            ) : (
                                <>
                                    <span>
                                        {mode === "login"
                                            ? "ورود به حساب"
                                            : "ثبت‌نام"}
                                    </span>
                                    <FiArrowLeft className="text-lg" />
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 flex items-center justify-center gap-1 border-t border-gray-200 pt-5 text-sm text-[var(--color-text-secondary)]">
                        <span>
                            {mode === "login"
                                ? "حساب کاربری ندارید؟"
                                : "قبلاً ثبت‌نام کرده‌اید؟"}
                        </span>
                        <button
                            type="button"
                            onClick={() =>
                                setMode((m) =>
                                    m === "login" ? "register" : "login"
                                )
                            }
                            className="font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-light)]"
                        >
                            {mode === "login" ? "ثبت‌نام کنید" : "وارد شوید"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login