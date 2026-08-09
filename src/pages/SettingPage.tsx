import Button from "../components/common/Button";
import { useThemeStore } from "../stores/themeStore";
import { CiUmbrella } from "react-icons/ci";
import { useFontSizeTheme } from "../stores/fontSizeStore";
import { useFontFamilyStore } from "../stores/fontFamily";
import { CiUser } from "react-icons/ci";

const SettingPage = () => {
  const setTheme = useThemeStore((state) => state.setTheme);
  const setFontSize = useFontSizeTheme((state) => state.setFontSize);
  const setFontFamily = useFontFamilyStore((state) => state.setFont);

  // theme
  const themeHandlerLight = () => {
    setTheme("light");
  };

  const themeHandlerDark = () => {
    setTheme("dark");
  };

  const themeHandlerEyeComfort = () => {
    setTheme("eyeComfort");
  };

  // font size
  const fontSizeHandlerSmall = () => {
    setFontSize("small");
  };

  const fontSizeHandlerMedium = () => {
    setFontSize("medium");
  };

  const fontSizeHandlerLarge = () => {
    setFontSize("large");
  };

  // font family
  const fontFamilyYekan = () => {
    setFontFamily("Yekan");
  };

  const fontFamilyVazirmatn = () => {
    setFontFamily("Vazirmatn");
  };

  const fontFamilyShabnam = () => {
    setFontFamily("Shabnam");
  };

  return (
    <section className="space-y-6 p-4 xl:p-6 text-[var(--color-text-primary)]">
      <div className="grid grid-cols-2 gap-4">
        {/* apperance */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] flex gap-2 items-center">
            <CiUmbrella />
            ظاهر برنامه
          </h2>

          {/* theme */}
          <div className="mt-4 flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
            <div>
              <h3 className="text-xl text-[var(--color-text-primary)]">
                تم برنامه
              </h3>
            </div>

            <div className="flex justify-between gap-4">
              <Button className ="w-full" 
              onClick={themeHandlerLight} variant="secondary">
                روشن
              </Button>

              <Button className ="w-full !bg-[#EDE2D0] !text-[#9A8353]"
              onClick={themeHandlerEyeComfort} 
              variant="secondary">
                راحتی چشم
              </Button>

              <Button className ="w-full !bg-[#181B24] !text-[#9A9EAC] hover:bg-[var(--color-card)]" 
              onClick={themeHandlerDark} variant="secondary">
                تیره
              </Button>
            </div>
          </div>

          {/* font size */}
          <div className="mt-4 flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
            <div>
              <h3 className="text-xl text-[var(--color-text-primary)]">
                اندازه فونت
              </h3>
            </div>

            <div className="flex justify-between gap-4">
              <Button className ="w-full text-xs" 
                onClick={fontSizeHandlerSmall}
                variant="secondary"
              >
                کوچک
              </Button>

              <Button className ="w-full" 
                onClick={fontSizeHandlerMedium}
                variant="secondary"
              >
                متوسط
              </Button>

              <Button className ="w-full text-xl" 
                onClick={fontSizeHandlerLarge}
                variant="secondary"
              >
                بزرگ
              </Button>
            </div>
          </div>

          {/* font family */}
          <div className="mt-4 flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
            <div>
              <h3 className="text-xl text-[var(--color-text-primary)]">
                تغییر فونت
              </h3>
            </div>

            <div className="flex justify-between gap-4">
              <Button className ="w-full font-Yekan" 
                onClick={fontFamilyYekan}
                variant="secondary"
              >
                فونت یکان
              </Button>

              <Button className ="w-full font-Vazirmatn" 
                onClick={fontFamilyVazirmatn}
                variant="secondary"
              >
                فونت وزیرمتن
              </Button>

              <Button className ="w-full font-Shabnam" 
                onClick={fontFamilyShabnam}
                variant="secondary"
              >
                فونت شبنم
              </Button>
            </div>
          </div>
        </div>
        {/* profile */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] flex gap-2 items-center">
            <CiUser />
            تنظیمات حساب کاربری
          </h2>

          <div className="mt-4 flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
            <div>
              <h3 className="text-xl text-[var(--color-text-primary)]">
                تغییر رمز
              </h3>
            </div>

            <div>

            </div>
          </div>

          <div className="mt-4 flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
            <div>
              <h3 className="text-xl text-[var(--color-text-primary)]">
                تغییر ایمیل
              </h3>
            </div>

            <div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingPage;