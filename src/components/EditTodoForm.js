import React, { useState } from "react";

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value in edittodoform => ",value);
    editTodo(value, task.id);
    setValue("")
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => {
          console.log("e.target.value in edittodoform= ", e.target.value); // Logs the current input value to the console
          setValue(e.target.value); // Updates the state
        }}
      />
      <button type="submit" className="todo-btn">Edit Task </button>
    </form>
  );
};
