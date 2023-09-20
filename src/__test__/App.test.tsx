import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

it("renders app component", () => {
  render(<App />);
  const title = screen.getByText("Vite + React");
  expect(title).toBeInTheDocument();
});
