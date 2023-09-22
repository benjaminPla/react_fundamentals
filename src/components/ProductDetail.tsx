import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = useSelector(
    (state: any) => state.products.products[Number(id) - 1]
  );

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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
