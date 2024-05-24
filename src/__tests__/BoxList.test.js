import React from "react";
import { render } from "@testing-library/react";
import BoxList from "../components/Box/BoxList";

it("should render without crashing", () => {
  render(<BoxList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});
