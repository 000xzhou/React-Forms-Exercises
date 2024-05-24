function Box({ width, height, bgColor, id }) {
  const mystyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: bgColor,
  };
  return (
    <>
      <div id={id} style={mystyle}></div>
      <button>X</button>
    </>
  );
}

export default Box;
