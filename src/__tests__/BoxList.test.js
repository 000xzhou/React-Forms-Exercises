import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "../components/Box/BoxList";

it("should render without crashing", () => {
  render(<BoxList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new Box", () => {
  const { getByLabelText, getByText, container } = render(<BoxList />);
  // get inputs
  const width = getByLabelText("Width:");
  const height = getByLabelText("Height:");
  const bgColor = getByLabelText("Background Color:");
  const addButton = getByText("Submit");

  // add input and submit
  fireEvent.change(width, { target: { value: "100" } });
  fireEvent.change(height, { target: { value: "100" } });
  fireEvent.change(bgColor, { target: { value: "blue" } });
  fireEvent.click(addButton);

  // get box
  const newBox = container.querySelector(".box");

  // new box in doc
  expect(newBox).toBeInTheDocument();
  expect(newBox).toHaveStyle({
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
  });
});

it("should delete a Box", () => {
  const { getByLabelText, getByText, container } = render(<BoxList />);
  // get inputs
  const width = getByLabelText("Width:");
  const height = getByLabelText("Height:");
  const bgColor = getByLabelText("Background Color:");
  const addButton = getByText("Submit");

  // add input and submit
  fireEvent.change(width, { target: { value: "100" } });
  fireEvent.change(height, { target: { value: "100" } });
  fireEvent.change(bgColor, { target: { value: "blue" } });
  fireEvent.click(addButton);

  // get box
  let newBox = container.querySelector(".box");

  // new box in doc
  expect(newBox).toBeInTheDocument();
  expect(newBox).toHaveStyle({
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
  });

  // get delete btn and press it
  const deleteButton = getByText("X");
  fireEvent.click(deleteButton);

  expect(newBox).not.toBeInTheDocument();
});
