import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "@mui/material/List";
import Navbar from "./navbar";
import TodoItem from "./todo-item";
import TodoForm from "./todo-form";
import TodoCounter from "./todo-counter";

const initial_list = [
  { id: uuidv4(), title: "example task", completed: false },
];

export default function Todos() {
  const [listItems, setListItems] = useState(initial_list);
  const [toggleForm, setToggleForm] = useState(false);
  const [taskCount, setTaskCount] = useState(0);
  const handleToggle = (value) => {
    console.log(value);
  };
  const deleteButtonClick = (idx) => {
    setListItems((prev) => {
      return prev.filter((elem) => {
        return elem.id !== idx;
      });
    });
    console.log(`element with id ${idx} has been deleted`);
  };
  const chekboxClickHandler = (idx) => {
    setListItems((prev) => {
      return prev.map((elem) => {
        if (elem.id === idx){ 
            return { ...elem, completed: !elem.completed };
        }
        return { ...elem };
      });
    });
    console.log(idx);
  };
  const updateList = (new_task) => {
    setListItems((prev) => {
        return [...prev, {id:uuidv4(), title:new_task, completed: false}]
    });
  }
  return (
    <>
      <Navbar form_state={setToggleForm} />
      {toggleForm && <TodoForm sendData={updateList}/>}
      {listItems.length !== 0 && <TodoCounter currCount={taskCount}
        totalCount={listItems.length}/>}
      <List
        sx={{
          maxWidth: 360,
          bgcolor: "background.paper",
          justifySelf: "center",
          m: 2,
        }}
        className="w-85"
      >
        {listItems.map((value, idx) => {
          const labelId = `checkbox-list-label-${idx}`;
          return (
            <TodoItem
              key={idx}
              value={value}
              labelId={labelId}
              handleToggle={handleToggle}
              chekboxClickHandler={chekboxClickHandler}
              deleteButtonClick={deleteButtonClick}
              taskCountFunc={setTaskCount}
            />
          );
        })}
      </List>
    </>
  );
}
