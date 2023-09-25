import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

it("renders app component", () => {
  render(<App />);

  const homeLink = screen.getAllByText("Home");

  expect(homeLink.length).toBe(2);
});
