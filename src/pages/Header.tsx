import Button from "../components/common/Button"
import SearchBar from "../components/common/SearchBar"

const Header = () => {
  return (
    <header>
      <h1>TaskFlow</h1>
      <div>
        <Button className="bg-blue-500 hover:bg-blue-700 duration-300 rounded-lg p-2 text-white cursor-pointer">
          اضافه کردن
        </Button>
        <SearchBar className="bg-gray-100" type="text" />
      </div>

    </header>
  )
}

export default Header