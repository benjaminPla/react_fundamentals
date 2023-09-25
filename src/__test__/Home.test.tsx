import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { homeItems } from "../utils/homeItems";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders texts correctly", () => {
    const descriptionText =
      "This project is a demonstration of a highly scalable web application built using React, Vite, TypeScript, and Jest. It covers all the front-end fundamentals.";

    const title = screen.getByText("React Fundamentals");
    const subtitle = screen.getByText("Overview");
    const description = screen.getByText(descriptionText);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("renders classNames correcly", () => {
    const container = screen.getByTestId("container");
    const title = screen.getByTestId("title");

    expect(container).toHaveClass("container");
    expect(title).toHaveClass("display-4");
  });

  it("renders HomeCard component", () => {
    homeItems.forEach((item) => {
      const cardTitle = screen.getByText(item.title);
      expect(cardTitle).toBeInTheDocument();

      item.checks.forEach((check) => {
        const cardCheck = screen.getByText(check);
        expect(cardCheck).toBeInTheDocument();
      });
    });
  });
});
