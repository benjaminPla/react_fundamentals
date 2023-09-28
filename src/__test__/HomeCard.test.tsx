import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import HomeCard from "../components/HomeCard";
import { homeItems } from "../utils/homeItems";

describe("HomeCard", () => {
  beforeEach(() => {
    render(<HomeCard items={homeItems} />);
  });

  it("renders texts correctly", () => {
    homeItems.forEach((item) => {
      const title = screen.getByText(item.title);
      expect(title).toBeInTheDocument();

      item.checks.forEach((check) => {
        const checkDOM = screen.getByText(check);
        expect(checkDOM).toBeInTheDocument();
      });
    });
  });

  it("renders checks as checked and disabled", () => {
    const checks = screen.getAllByTestId("check");
    checks.forEach((check) => {
      expect(check).toBeChecked();
      expect(check).toBeDisabled();
    });
  });

  it("renders classNames correctly", () => {
    const row = screen.getByTestId("row");
    const mainContainers = screen.getAllByTestId("mainContainer");
    const subContainers = screen.getAllByTestId("subContainer");
    const cardBodys = screen.getAllByTestId("cardBody");
    const titles = screen.getAllByTestId("homeCardTitle");
    const uls = screen.getAllByTestId("ul");
    const lis = screen.getAllByTestId("li");
    const checks = screen.getAllByTestId("check");

    expect(row).toHaveClass("row");
    mainContainers.forEach((container) => {
      expect(container).toHaveClass("col-md-4 mb-4");
    });
    subContainers.forEach((container) => {
      expect(container).toHaveClass("card h-100");
    });
    cardBodys.forEach((card) => {
      expect(card).toHaveClass("card-body");
    });
    titles.forEach((titles) => {
      expect(titles).toHaveClass("card-title");
    });
    uls.forEach((ul) => {
      expect(ul).toHaveClass("card-list");
    });
    lis.forEach((li) => {
      expect(li).toHaveClass("card-item");
    });
    checks.forEach((check) => {
      expect(check).toHaveClass("card-checkbox");
    });
  });

  it("should not uncheck if click", () => {
    const checks = screen.getAllByTestId("check");

    checks.forEach((check) => {
      fireEvent.click(check);
      expect(check).toBeChecked();
    });
  });
});
