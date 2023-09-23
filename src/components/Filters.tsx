import React, { useState } from "react";
import { setFilteredProducts } from "../store/slices/products";
import { useSelector, useDispatch } from "react-redux";
import { IProduct } from "./Products";

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.products);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);

  // should be a fetch
  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];
  const priceRanges = ["Under $20", "$20 - $50", "$50 - $100", "Over $100"];

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!event.target.value) {
      dispatch(setFilteredProducts(products));
      setCategoryFilter(null);
    } else {
      const filteredProducts = products.filter(
        (product: IProduct) => product.category === event.target.value
      );
      dispatch(setFilteredProducts(filteredProducts));
      setCategoryFilter(event.target.value);
    }
  };

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let filteredProducts = [];

    switch (event.target.value) {
      case "":
        dispatch(setFilteredProducts(products));
        setPriceFilter(null);
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

  return (
    <div className="row my-4">
      <h2>Filters</h2>
      <div className="col-md-6">
        <select className="form-select" onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-6">
        <select className="form-select" onChange={handlePriceRangeChange}>
          <option value="">Select a price range</option>
          {priceRanges.map((priceRange) => (
            <option key={priceRange} value={priceRange}>
              {priceRange}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
