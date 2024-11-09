import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Button component", () => {
  test("renders CustomButton correctly", () => {
    const { asFragment } = render(<Button text="Click Me" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("displays the correct text", () => {
    const { getByText } = render(<Button text="Submit" />);
    expect(getByText("Submit")).toBeInTheDocument();
  });
});
