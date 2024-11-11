import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "../../pages/HomePage";

// Mock useSelector
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("HomePage component", () => {
  beforeEach(() => {
    useSelector.mockReturnValue("test value");
  });

  test("renders the HomePage component correctly", () => {
    const { asFragment } = render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByText("Home Page")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders the button correctly", () => {
    const { asFragment } = render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByRole("button", { name: /Go to About/i })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});