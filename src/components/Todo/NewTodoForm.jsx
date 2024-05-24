// import Box from "./Box.jsx";
import { useState } from "react";

function NewTodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  // handle input change
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // when submitted, creates a new Box
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Todo:</label>
      <input
        type="text"
        id="todoInput"
        name="todoInput"
        placeholder="Eat dinner"
        value={todo}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default NewTodoForm;
