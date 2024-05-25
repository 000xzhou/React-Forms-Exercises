import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "../components/Todo/NewTodoForm";

it("should render without crashing", () => {
  render(<NewTodoForm />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
