

const Sidebar = () => {
  return (
    <aside className="w-3xs relative">
      <div className="w-3xs z-40 bg-gray-200 shadow-lg overflow-y-auto fixed bottom-0 top-0 flex pt-20">
        <div>
          sidebar

        </div>
        <ul>
          <li>
            <a href="">داشبورد</a>
          </li>
          <li>
            <a href="">تنظیمات</a>
          </li>
          <li>
            <a href="">آمار</a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar