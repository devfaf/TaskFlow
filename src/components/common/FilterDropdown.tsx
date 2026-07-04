
const FilterDropdown = () => {
  return (
    <div>
      <select name="filter" id="filter-dropdown" className="bg-white rounded-lg p-2">
        <option value="volvo">همه</option>
        <option value="saab">فعال</option>
        <option value="mercedes">تکمیل‌شده</option>
      </select>
    </div>
  )
}

export default FilterDropdown