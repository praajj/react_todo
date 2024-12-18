import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value in todoform => ",value);
    addTodo(value);
    setValue("")
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Task for the day"
        onChange={(e) => {
          console.log("e.target.value in todoform= ", e.target.value); // Logs the current input value to the console
          setValue(e.target.value); // Updates the state
        }}
      />
      <button type="submit" className="todo-btn">Add Task </button>
    </form>
  );
};
