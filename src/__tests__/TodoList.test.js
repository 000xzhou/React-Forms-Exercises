import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "../components/Todo/TodoList";

it("should render without crashing", () => {
  render(<TodoList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", () => {
  const { getByLabelText, getByText } = render(<TodoList />);
  // get inputs
  const todoInput = getByLabelText("Todo:");
  const addButton = getByText("Add");

  // add input and submit
  fireEvent.change(todoInput, { target: { value: "100" } });
  fireEvent.click(addButton);
});
