function Box({ width, height, bgColor }) {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {width}
        {height}
        {bgColor}
      </div>
      <button>X</button>
    </>
  );
}

export default Box;
