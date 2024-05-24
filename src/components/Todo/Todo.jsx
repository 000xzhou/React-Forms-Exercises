function Todo({ id, item, deleteTodo }) {
  return (
    <>
      <div id={id}>{item}</div>
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
