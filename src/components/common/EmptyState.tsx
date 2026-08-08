import noData from "../../assets/illustration/no-data.svg"

const EmptyState = () => {
    return (
        <div className="flex bg-transparent items-center justify-center p-4">
            <img 
            className="w-62"
            src={noData} 
            alt="محتوای جهت نمایش وجود ندارد" />
        </div>
    )
}

export default EmptyState