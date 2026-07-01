import Button from "../components/common/Button"

const Header = () => {
  return (
    <div>
      <h1>TaskFlow</h1>
      <Button className="bg-blue-500 hover:bg-blue-700 duration-300 rounded-lg p-2 text-white cursor-pointer">
        اضافه کردن
      </Button>
    </div>
  )
}

export default Header