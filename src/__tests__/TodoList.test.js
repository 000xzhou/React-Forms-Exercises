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
  const { getByLabelText, queryByText } = render(<TodoList />);
  // get inputs
  const todoInput = getByLabelText("Todo:");
  const addButton = queryByText("Add");

  // add input and submit
  fireEvent.change(todoInput, { target: { value: "Eat some pizza" } });
  fireEvent.click(addButton);

  const pizza = queryByText("Eat some pizza");
  expect(pizza).toBeInTheDocument();
});

it("should dedlete a todo", () => {
  const { getByLabelText, queryByText } = render(<TodoList />);
  // get inputs
  const todoInput = getByLabelText("Todo:");
  const addButton = queryByText("Add");

  // add input and submit
  fireEvent.change(todoInput, { target: { value: "Eat some pizza" } });
  fireEvent.click(addButton);

  const pizza = queryByText("Eat some pizza");
  // pizza in doc
  expect(pizza).toBeInTheDocument();

  const deleteBtn = queryByText("x");
  fireEvent.click(deleteBtn);

  // pizza got eatten
  expect(pizza).not.toBeInTheDocument();
});

it("should edit a todo", () => {
  const { queryByText, queryByLabelText, container } = render(<TodoList />);
  // get inputs
  const addTodoInput = queryByLabelText("Todo:");
  const addButton = queryByText("Add");
  // Add input and submit
  fireEvent.change(addTodoInput, { target: { value: "Eat some pizza" } });
  fireEvent.click(addButton);

  let pizza = queryByText("Eat some pizza");
  expect(pizza).toBeInTheDocument();

  // Get the edit button and click it
  let editBtn = queryByText("Edit");
  fireEvent.click(editBtn);

  // Edit the todo
  const editTodoInput = container.querySelector("#editingTodo");

  fireEvent.change(editTodoInput, { target: { value: "Eat some mango" } });
  fireEvent.click(queryByText("Edit"));

  pizza = queryByText("Eat some pizza");
  const mango = queryByText("Eat some mango");

  // Eat snack instead
  expect(mango).toBeInTheDocument();
  expect(pizza).not.toBeInTheDocument();
});

it("should cancel editing a todo", () => {
  const { queryByText, queryByLabelText, container } = render(<TodoList />);
  // get inputs
  const addTodoInput = queryByLabelText("Todo:");
  const addButton = queryByText("Add");
  // Add input and submit
  fireEvent.change(addTodoInput, { target: { value: "Eat some pizza" } });
  fireEvent.click(addButton);

  let pizza = queryByText("Eat some pizza");
  expect(pizza).toBeInTheDocument();

  // Get the edit button and click it
  let editBtn = queryByText("Edit");
  fireEvent.click(editBtn);

  // Verify the edit form is displayed
  let editInput = container.querySelector("#editingTodo");
  expect(editInput).toBeInTheDocument();

  // cancel editing
  let cancelBtn = queryByText("Cancel");
  fireEvent.click(cancelBtn);

  // Verify the edit form not display
  expect(editInput).not.toBeInTheDocument();

  // Verify the original todo is still in the document
  pizza = queryByText("Eat some pizza");
  expect(pizza).toBeInTheDocument();
});

it("should mark a todo complete", () => {
  const { getByLabelText, queryByText } = render(<TodoList />);
  // get inputs
  const todoInput = getByLabelText("Todo:");
  const addButton = queryByText("Add");

  // add input and submit
  fireEvent.change(todoInput, { target: { value: "Eat some pizza" } });
  fireEvent.click(addButton);

  const pizza = queryByText("Eat some pizza");
  // pizza in doc
  expect(pizza).toBeInTheDocument();

  const completed = queryByText("Mark as completed");
  fireEvent.click(completed);

  // Finish eating pizza
  expect(pizza).toHaveStyle({
    textDecoration: "line-through",
  });

  // Mistakes were made! there are more pizza!!!
  const incomplete = queryByText("Mark as incomplete");
  fireEvent.click(incomplete);

  expect(pizza).toHaveStyle({
    textDecoration: "none",
  });
});
