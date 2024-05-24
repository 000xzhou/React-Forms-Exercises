import React from "react";
import { render } from "@testing-library/react";
import Box from "../components/Box/Box";

it("should render without crashing", () => {
  render(<Box width="123px" height="123px" bgColor="blue" id={1} />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
