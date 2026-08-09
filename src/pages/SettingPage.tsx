import Button from "../components/common/Button";
import { useThemeStore } from "../stores/themeStore"
import { CiUmbrella } from "react-icons/ci";
import { useFontSizeTheme } from "../stores/fontSizeStore";

const SettingPage = () => {
  const setTheme = useThemeStore(state => state.setTheme)
  const setFontSize = useFontSizeTheme(state => state.setFontSize)

  // theme
  const themeHandlerLight = () => {
    setTheme("light")
  }
  const themeHandlerDark = () => {
    setTheme("dark")
  }
  const themeHandlerEyeComfort = () => {
    setTheme("eyeComfort")
  }

  // font size
  const fontSizeHandlerSmall = () => {
    setFontSize("small")
  }
  const fontSizeHandlerMedium = () => {
    setFontSize("medium")
  }
  const fontSizeHandlerLarge = () => {
    setFontSize("large")
  }

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 p-4 ">
        {/* apperance */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <CiUmbrella className="text-2xl" />
            <h2 className="font-bold text-2xl">ظاهر برنامه</h2>
          </div>
          <div className="flex flex-col gap-4">
            {/* theme */}
            <div className="bg-blue-300 p-4 rounded-xl flex flex-col gap-2">
              <div>

                <h3 className="text-xl">تم برنامه</h3>
              </div>
              <div>
                <Button
                  onClick={themeHandlerLight}
                  variant="primary"
                >روشن</Button>
                <Button
                  onClick={themeHandlerDark}
                  variant="primary"
                >تیره</Button>
                <Button
                  onClick={themeHandlerEyeComfort}
                  variant="primary"
                >راحتی چشم</Button>
              </div>
            </div>
            {/* text */}
            <div className="bg-blue-300 p-4 rounded-xl flex flex-col gap-2">
              <div>
                <h3 className="text-xl">اندازه فونت</h3>
              </div>
              <div>
                <Button
                  onClick={fontSizeHandlerSmall}
                  variant="primary"
                >کوچک</Button>
                <Button
                  onClick={fontSizeHandlerMedium}
                  variant="primary"
                >متوسط</Button>
                <Button
                  onClick={fontSizeHandlerLarge}
                  variant="primary"
                >بزرگ</Button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default SettingPage