import { Link } from "react-router";

import Button from "../components/common/Button";
import { useAuthStore } from "../features/auth/authStore";

const ProfilePage = () => {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  return (
    <section className="space-y-6 p-6">

      <div>
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
          پروفایل
        </h1>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          اطلاعات حساب کاربری
        </p>
      </div>

      {isAuthenticated ? (
        <div
          className="
            flex
            flex-col
            gap-5
            rounded-xl
            border
            border-[var(--color-border)]
            bg-white
            p-6
          "
        >
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[var(--color-text-secondary)]">
              نام
            </span>

            <div className="rounded-lg bg-[var(--color-background)] px-4 py-2">
              John Doe
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-[var(--color-text-secondary)]">
              ایمیل
            </span>

            <div className="rounded-lg bg-[var(--color-background)] px-4 py-2">
              john@example.com
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-[var(--color-text-secondary)]">
              رمز عبور
            </span>

            <div className="rounded-lg bg-[var(--color-background)] px-4 py-2">
              ••••••••••••
            </div>
          </div>
        </div>
      ) : (
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-5
            rounded-xl
            border
            border-dashed
            border-[var(--color-border)]
            bg-white
            py-14
          "
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
            وارد حساب کاربری نشده‌اید
          </h2>

          <p className="text-sm text-[var(--color-text-secondary)]">
            برای مشاهده اطلاعات پروفایل ابتدا وارد حساب خود شوید.
          </p>

          <Link to="/login">
            <Button variant="primary">
              ورود | ثبت‌نام
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProfilePage;