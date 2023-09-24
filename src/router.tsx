import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
// import Checkout from "./components/Checkout";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:id", element: <ProductDetail /> },
  { path: "/cart", element: <Cart /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
