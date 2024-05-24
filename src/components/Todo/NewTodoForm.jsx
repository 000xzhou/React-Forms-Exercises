// import Box from "./Box.jsx";
import { useState } from "react";

function NewTodoForm() {
  const initialState = {
    width: "",
    height: "",
    bgColor: "",
  };

  const [formData, setFormData] = useState(initialState);

  // handle input change
  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  // when submitted, creates a new Box
  const handleSubmit = (e) => {
    e.preventDefault();
    createBox({ ...formData });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        type="text"
        id="width"
        name="width"
        placeholder="width"
        value={formData.width}
        onChange={handleChange}
      />

      <button>Submit</button>
    </form>
  );
}

export default NewTodoForm;
