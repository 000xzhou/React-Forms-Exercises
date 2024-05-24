import NewTodoForm from "./NewTodoForm";

function Todo({ id, item, deleteTodo, editTodo, isEditing, toggleEditForm }) {
  return (
    <>
      <div id={id}>{item}</div>
      {isEditing && (
        <NewTodoForm existingTodo={{ id, item }} editTodo={editTodo} />
      )}
      <button onClick={() => toggleEditForm()}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        x
      </button>
    </>
  );
}

export default Todo;
