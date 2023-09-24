import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cart";
import { IProduct } from "./Products";

const ProductDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(
    (state: any) => state.products.products[Number(id) - 1]
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10) || 1;
    setQuantity(newQuantity);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            style={{ maxHeight: "400px", objectFit: "contain" }}
            src={product.image}
            alt={product.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <h3>${product.price}</h3>
          <p>{product.description}</p>
          <p>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              className="form-control"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <p>Total: ${product.price * quantity}</p>
          <button
            className="btn btn-primary"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
