function Box({ width, height, bgColor, id, deleteBox }) {
  // stlye box
  const mystyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: bgColor,
  };

  return (
    <>
      <div id={id} style={mystyle}></div>
      <button onClick={() => deleteBox(id)}>X</button>
    </>
  );
}

export default Box;
