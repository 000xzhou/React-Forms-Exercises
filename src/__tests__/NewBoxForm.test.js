import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "../components/Box/NewBoxForm";

it("should render without crashing", () => {
  render(<NewBoxForm />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
