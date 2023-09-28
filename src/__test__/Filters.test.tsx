import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../components/Filters";
import { categories, priceRanges } from "../utils/filtersItems";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("Filters should", () => {
  beforeEach(() => {
    // useDispatchMock.mockClear();
    render(<Filters />);
  });

  it("render texts correctly", () => {
    const filtersTitle = screen.getByText("Filters");
    const sortTitle = screen.getByText("Sort");

    expect(filtersTitle).toBeInTheDocument();
    expect(sortTitle).toBeInTheDocument();
  });

  it("render selects correcly", () => {
    const filterCategorySelect = screen.getByTestId("filterCategorySelect");
    const filterPriceSelect = screen.getByTestId("filterPriceSelect");
    const sortPriceSelect = screen.getByTestId("sortPriceSelect");
    const sortStartsSelect = screen.getByTestId("sortStartsSelect");
    categories.forEach((item) => {
      const option = screen.getByText(item);
      expect(option).toBeInTheDocument();
      expect(option).toHaveAttribute("value", item);
    });
    priceRanges.forEach((item) => {
      const option = screen.getByText(item);
      expect(option).toBeInTheDocument();
      expect(option).toHaveAttribute("value", item);
    });

    expect(filterCategorySelect).toBeInTheDocument();
    expect(filterPriceSelect).toBeInTheDocument();
    expect(sortPriceSelect).toBeInTheDocument();
    expect(sortStartsSelect).toBeInTheDocument();
  });

  it("renders classNames correcly", () => {
    const container = screen.getByTestId("container");
    const mainCols = screen.getAllByTestId("mainCol");
    const secondaryCols = screen.getAllByTestId("secondaryCol");
    const filterCategorySelect = screen.getByTestId("filterCategorySelect");
    const filterPriceSelect = screen.getByTestId("filterPriceSelect");

    expect(container).toHaveClass("row my-4");
    mainCols.forEach((col) => {
      expect(col).toHaveClass("col-md-6");
    });
    secondaryCols.forEach((col) => {
      expect(col).toHaveClass("col-md-12");
    });
    expect(filterCategorySelect).toHaveClass("form-select");
    expect(filterPriceSelect).toHaveClass("form-select");
  });

  // it("should dispatch correctly", () => {
  // const filterCategorySelect = screen.getByTestId("filterCategorySelect");
  // const mockValue = "mockValue";

  // fireEvent.change(filterCategorySelect, { target: { value: mockValue } });

  // expect(mockDispatch).toHaveBeenCalled();
  // expect(mockDispatch).toHaveBeenCalledWith({
  // payload: mockValue,
  // type: "products/setFilteredProducts",
  // });
  // });
});
