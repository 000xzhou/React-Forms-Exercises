// import Box from "./Box.jsx";
import { useState } from "react";

function NewTodoForm({ addTodo, editTodo, existingTodo = "" }) {
  const [todo, setTodo] = useState(existingTodo.item || "");

  // handle input change
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // when submitted, creates a new todo or edits it depending on existingTodo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingTodo !== "") {
      editTodo(existingTodo.id, todo);
    } else {
      addTodo(todo);
    }
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={existingTodo !== "" ? "editingTodo" : "addingTodo"}>
        Todo:
      </label>
      <input
        type="text"
        id={existingTodo !== "" ? "editingTodo" : "addingTodo"}
        name="todoInput"
        placeholder="Eat dinner"
        value={todo}
        onChange={handleChange}
      />
      <button>{existingTodo !== "" ? "Edit" : "Add"}</button>
    </form>
  );
}

export default NewTodoForm;
