import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  // add todo to todoList state function
  const addTodo = (todo) => {
    setTodoList((item) => [...item, { id: uuidv4(), item: todo }]);
  };

  // delete todo item by id to todoList state function
  const deleteTodo = (id) => {
    setTodoList((item) => item.filter((b) => b.id !== id));
  };

  // map out todo and send it to todo
  const todoComponents = todoList.map(({ id, item }) => (
    <Todo key={id} id={id} item={item} deleteTodo={deleteTodo} />
  ));

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      {todoComponents}
    </>
  );
}

export default TodoList;
