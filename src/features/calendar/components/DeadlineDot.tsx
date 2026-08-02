type DeadlineDotProps = {
  count: number;
}

const DeadlineDot = ({ count }: DeadlineDotProps) => {
  if (count === 0) return null;

  return (
    <div>
      {
        count <= 2 ? (
          Array.from({ length:count }).map((_, i) =>
            <span key={i} className="!absolute !right-0 w-1.5 h-1.5 bg-red-500 rounded-full">
            </span>
          )) : (
          <div className="w-0 h-2 relative">
            <span className="!absolute !right-0 w-1.5 h-1.5 bg-red-500 rounded-full">
            </span>
            <span className="!absolute flex !text-xs text-red-500 rounded-full !-top-3 font-bold !hover:bg-transparent ">
              {count - 1}+
            </span>
          </div>
        )}
          
    </div>
  )
}
export default DeadlineDot