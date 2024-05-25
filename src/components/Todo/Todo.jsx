import NewTodoForm from "./NewTodoForm";

function Todo({
  id,
  item,
  deleteTodo,
  editTodo,
  isEditing,
  toggleEditForm,
  completed,
  toggleCompleted,
}) {
  const buttonStyle = {
    textDecoration: completed ? "line-through" : "none",
  };
  return (
    <>
      <div id={id} style={buttonStyle}>
        {item}
      </div>
      {isEditing && (
        <NewTodoForm existingTodo={{ id, item }} editTodo={editTodo} />
      )}
      <button onClick={() => toggleEditForm()}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <button onClick={() => toggleCompleted(id)}>
        Mark as {completed ? "incomplete" : "completed"}
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
