export default function TodoCounter({currCount, totalCount}){
    return (
        <div className="border-none m-2 mt-3 w-85 p-0 justify-self-center 
            grid grid-cols-3 shadow-md rounded-md
        ">
            <p className="bg-blue-400 text-white col-span-2 p-2 rounded-l-md">TASKS COMPLETED:</p>
            <span className={`text-center p-2`}>{currCount} / {totalCount}</span>
        </div>
    )
}