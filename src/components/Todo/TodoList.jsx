import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  // add todo to todoList state function
  const addTodo = (todo) => {
    setTodoList((item) => [...item, { id: uuidv4(), item: todo }]);
  };

  // map todoList if if match edit else don't
  const editTodo = (id, newTodo) => {
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, item: newTodo } : todo
      )
    );
    toggleEditForm();
  };
  const toggleEditForm = () => {
    setIsEditing((prev) => !prev);
  };

  // delete todo item by id to todoList state function
  const deleteTodo = (id) => {
    setTodoList((item) => item.filter((b) => b.id !== id));
  };

  // map out todo and send it to todo
  const todoComponents = todoList.map(({ id, item }) => (
    <Todo
      key={id}
      id={id}
      item={item}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      isEditing={isEditing}
      toggleEditForm={toggleEditForm}
    />
  ));

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      {todoComponents}
    </>
  );
}

export default TodoList;
