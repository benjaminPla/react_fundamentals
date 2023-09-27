import React from "react";
import { setFilteredProducts } from "../store/slices/products";
import { categories, priceRanges } from "../utils/filtersItems";
import { useSelector, useDispatch } from "react-redux";
import { IProduct } from "./Products";

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.products);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!event.target.value) {
      dispatch(setFilteredProducts(products));
    } else {
      const filteredProducts = products.filter(
        (product: IProduct) => product.category === event.target.value
      );
      dispatch(setFilteredProducts(filteredProducts));
    }
  };

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let filteredProducts = [];

    switch (event.target.value) {
      case "":
        dispatch(setFilteredProducts(products));
        return;
      case priceRanges[0]:
        filteredProducts = products.filter(
          (product: IProduct) => product.price < 20
        );
        break;
      case priceRanges[1]:
        filteredProducts = products.filter(
          (product: IProduct) => product.price >= 20 && product.price <= 50
        );
        break;
      case priceRanges[2]:
        filteredProducts = products.filter(
          (product: IProduct) => product.price >= 50 && product.price <= 100
        );
        break;
      case priceRanges[3]:
        filteredProducts = products.filter(
          (product: IProduct) => product.price >= 100
        );
        break;
    }
    dispatch(setFilteredProducts(filteredProducts));
  };

  const handleSortPriceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let sortedProducts = [...products];

    switch (event.target.value) {
      case "":
        dispatch(setFilteredProducts(products));
        return;
      case "asc":
        sortedProducts = products.toSorted(
          (a: IProduct, b: IProduct) => a.price - b.price
        );
        break;
      case "desc":
        sortedProducts = products.toSorted(
          (a: IProduct, b: IProduct) => b.price - a.price
        );
        break;
    }
    dispatch(setFilteredProducts(sortedProducts));
  };

  const handleSortStarsChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let sortedProducts = [...products];

    switch (event.target.value) {
      case "":
        dispatch(setFilteredProducts(products));
        return;
      case "asc":
        sortedProducts = products.toSorted(
          (a: IProduct, b: IProduct) => a.rating.rate - b.rating.rate
        );
        break;
      case "desc":
        sortedProducts = products.toSorted(
          (a: IProduct, b: IProduct) => b.rating.rate - a.rating.rate
        );
        break;
    }
    dispatch(setFilteredProducts(sortedProducts));
  };

  return (
    <div className="row my-4" data-testid="container">
      <div className="col-md-6" data-testid="mainCol">
        <h2>Filters</h2>
        <div className="col-md-12" data-testid="secondaryCol">
          <select
            className="form-select"
            onChange={handleCategoryChange}
            data-testid="filterCategorySelect"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-12" data-testid="secondaryCol">
          <select
            className="form-select"
            onChange={handlePriceRangeChange}
            data-testid="filterPriceSelect"
          >
            <option value="">Select a price range</option>
            {priceRanges.map((priceRange) => (
              <option key={priceRange} value={priceRange}>
                {priceRange}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-md-6" data-testid="mainCol">
        <h2>Sort</h2>
        <div className="col-md-12" data-testid="secondaryCol">
          <select
            className="form-select"
            onChange={handleSortPriceChange}
            data-testid="sortPriceSelect"
          >
            <option value="">Sort by price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
        <div className="col-md-12">
          <select
            className="form-select"
            onChange={handleSortStarsChange}
            data-testid="sortStartsSelect"
          >
            <option value="">Sort by stars</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
