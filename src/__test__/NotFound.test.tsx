import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NotFound from "../components/NotFound";

describe("NotFound should", () => {
  beforeEach(() => {
    render(<NotFound />);
  });

  it("render texts correctly", () => {
    const descriptionText = "The page you are looking for does not exist.";

    const title = screen.getByText("404 - Not Found");
    const description = screen.getByText(descriptionText);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("render classNames correcly", () => {
    const container = screen.getByTestId("container");
    const div = screen.getByTestId("div");

    expect(container).toHaveClass(
      "container d-flex justify-content-center align-items-center"
    );
    expect(div).toHaveClass("text-center");
  });

  it("render styles correcly", () => {
    const container = screen.getByTestId("container");

    expect(container).toHaveStyle("minHeight: 100vh");
  });
});
