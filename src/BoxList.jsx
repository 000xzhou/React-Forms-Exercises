import Box from "./Box.jsx";
import NewBoxForm from "./NewBoxForm.jsx";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function BoxList() {
  // <Box width, height, and background color />
  const [box, setBox] = useState([]);

  const createBox = (formData) => {
    // create box?
    setBox((box) => [...box, { ...formData, id: uuidv4() }]);
  };

  return (
    <>
      <NewBoxForm createBox={createBox} />
      <div>
        {box.map(({ width, height, bgColor, id }) => (
          <Box
            width={width}
            height={height}
            bgColor={bgColor}
            key={id}
            id={id}
          />
        ))}
      </div>
    </>
  );
}

export default BoxList;
