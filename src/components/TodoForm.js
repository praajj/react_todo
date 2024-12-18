import React from 'react'

export const TodoForm = () => {
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="Task for the day"
      />
      <button type="submit" className="todo-btn"></button>
    </form>
  );
}
