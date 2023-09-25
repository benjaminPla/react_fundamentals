import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart";

export interface ICartProduct {
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
  quantity?: number;
}

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.products);

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const cartItems = cart.map((item: any) => (
    <div className="card mb-3" key={item.id}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image} alt={item.title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Price: ${item.price.toFixed(2)}</p>
            <p className="card-text">Quantity: {item.quantity}</p>
            <p className="card-text">
              Total: ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  const totalItems = cart.reduce(
    (total: number, item: ICartProduct) => total + (item.quantity || 0),
    0
  );
  const totalPrice = cart
    .reduce(
      (total: number, item: ICartProduct) =>
        total + item.price * (item.quantity || 0),
      0
    )
    .toFixed(2);

  return (
    <div className="container mt-4">
      <h1>Your Shopping Cart</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="cart-items">{cartItems}</div>
        </div>

        <div className="col-md-4">
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice}</p>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
