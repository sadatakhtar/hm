import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "../../pages/HomePage";

describe("HomePage component", () => {
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
    expect(screen.getByRole("button", { name: /go to about/i })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("button click event", () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    const button = screen.getByRole("button", { name: /go to about/i });
    userEvent.click(button);
    // Add your assertions here to check if the navigation happened
  });

  test("renders the heading correctly", () => {
    const { asFragment } = render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByRole("heading", { name: /home page/i })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});