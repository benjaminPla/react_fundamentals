import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, setFilteredProducts } from "../store/slices/products";
import Filters from "./Filters";

export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state: any) => state.products.filteredProducts
  );
  const [loading, setLoading] = useState(true);
  const [expandedDescription, setExpandedDescription] = useState<number | null>(
    null
  );

  const fetchData = async (url: string): Promise<void> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(setProducts(data));
      dispatch(setFilteredProducts(data));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const toggleDescription = (productId: number) => {
    if (expandedDescription === productId) {
      setExpandedDescription(null);
    } else {
      setExpandedDescription(productId);
    }
  };

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    fetchData(url);
  }, []);

  return (
    <div className="container mt-4">
      <h1>Product List</h1>
      <Filters />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
              <div className="card h-100">
                <Link
                  to={`/products/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top img-fluid mt-4"
                    style={{ maxHeight: "150px", objectFit: "contain" }}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p
                    className="card-text"
                    style={{
                      maxHeight:
                        expandedDescription === product.id ? "none" : "100px",
                      overflow: "hidden",
                      transition: "max-height 0.3s ease-out",
                    }}
                  >
                    {product.description}
                  </p>
                  {product.description.length > 100 && (
                    <button
                      onClick={() => toggleDescription(product.id)}
                      className="btn btn-link p-0"
                    >
                      {expandedDescription === product.id
                        ? "Read Less"
                        : "Read More"}
                    </button>
                  )}
                  <p className="card-text">
                    <span>Rating: {product.rating.rate}/5 </span>
                    <span>({product.rating.count} reviews)</span>
                  </p>
                  <p className="card-text">Price: ${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
