import Alert from "@mui/material/Alert";

export default function TodoCounter({ currCount, totalCount }) {
  const allComplete = () => {
    return currCount === totalCount;
  };
  return (
    <>
      <div
        className="border-none m-2 mt-3 w-85 p-0 justify-self-center 
            grid grid-cols-3 shadow-md rounded-md
        "
      >
        <p className="bg-blue-400 text-white col-span-2 p-2 rounded-l-md text-center">
          TASKS COMPLETED
        </p>
        <span
          className={`text-center p-2 ${
            currCount === 0 ? "text-red-500" : "text-black"
          } ${currCount === totalCount ? "text-green-500" : "text-black"}
            }`}
        >
          {currCount} / {totalCount}
        </span>
      </div>
      {allComplete() && (
        <Alert severity="success" className="w-85 justify-self-center">
          Congrats!! All tasks completed
        </Alert>
      )}
    </>
  );
}
