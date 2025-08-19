import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
export default function TodoForm({ sendData }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const formSubmitHandler = (evt) => {
    console.log("submitted", evt.todo_title);
    sendData(evt.todo_title);
  };

  return (
    <form
      className="grid grid-cols-1 border-none bg-white w-85 p-2
        rounded-md m-2 shadow-md justify-self-center
    "
        onSubmit={handleSubmit(formSubmitHandler)}
    >
      <Typography
        variant="h7"
        component="h2"
        sx={{
          mb: 2,
        }}
      >
        Enter todo title
      </Typography>
        <TextField
          id="outlined-basic"
          label="todo title"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
          }}
          {...register("todo_title", {
            required: { value: true, message: "cannot be empty" },
            maxLength: { value: 100, message: "too long" },
          })}
        />
        {errors.todo_title && <p
            className="text-red-500 text-sm"
        >*{errors.todo_title.message}</p>}
    </form>
  );
}
