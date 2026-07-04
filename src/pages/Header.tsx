import Button from "../components/common/Button"
import SearchBar from "../components/common/SearchBar"
import FilterDropdown from "../components/common/FilterDropdown"


const Header = () => {
  return (
    <header className="flex gap-4 mx-auto p-3 bg-black">
      <div className="flex flex-col lg:flex-row lg:justify-end items-center gap-6 w-full bg-pink-400">
        <div className="flex gap-6 w-full items-center justify-between lg:justify-start">
          <h1>TaskFlow</h1>
          <FilterDropdown />
          <Button className="bg-blue-500 hover:bg-blue-700 duration-300 rounded-lg p-2 text-white cursor-pointer">
            اضافه کردن
          </Button>
        </div>
        <SearchBar className={`bg-gray-100 border-2 border-gray-300 outline-none rounded-lg px-2 w-full`} type="text" />

      </div>

    </header>
  )
}

export default Header