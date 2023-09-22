import React from "react";
import { setFilteredProducts } from "../store/slices/products";
import { useSelector, useDispatch } from "react-redux";

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

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
    const filteredProducts = products.filter(
      (product) => product.category === event.target.value
    );
    dispatch(setFilteredProducts(filteredProducts));
  };

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const filteredProducts = products.filter(
      (product) => product.price === event.target.value
    );
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
