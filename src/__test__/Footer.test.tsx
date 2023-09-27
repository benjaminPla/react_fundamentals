import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer should", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("render texts correctly", () => {
    const footerText = `© ${new Date().getFullYear()} React Fundamentals`;

    const text = screen.getByText(footerText);
    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");

    expect(text).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it("render classNames correctly", () => {
    const footer = screen.getByTestId("footer");
    const container = screen.getByTestId("container");
    const rows = screen.getAllByTestId("row");
    const cols = screen.getAllByTestId("col");
    const text = screen.getByTestId("text");
    const ul = screen.getByTestId("ul");
    const lis = screen.getAllByTestId("li");

    expect(footer).toHaveClass("footer bg-light");
    expect(container).toHaveClass("container");
    rows.forEach((row) => {
      expect(row).toHaveClass("row");
    });
    cols.forEach((col) => {
      expect(col).toHaveClass("col");
    });
    expect(text).toHaveClass("text-center");
    expect(ul).toHaveClass("list-unstyled d-flex justify-content-center");
    lis.forEach((li) => {
      expect(li).toHaveClass("mx-3");
    });
  });

  it("links should redirect correctly", () => {
    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");

    expect(homeLink).toHaveAttribute("href", "/");
    expect(aboutLink).toHaveAttribute("href", "https://www.benjaminpla.com");
    expect(aboutLink).toHaveAttribute("target", "_blank");
  });
});
