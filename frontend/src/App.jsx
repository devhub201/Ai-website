import { useState } from "react";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";

export default function App() {
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (plan) => {
    setCart([...cart, plan]);
    setPage("cart");
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i !== item));
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;

      case "plans":
        return <Plans setPage={setPage} setCategory={setCategory} />;

      case "category":
        return <Category category={category} addToCart={addToCart} />;

      case "cart":
        return (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            setPage={setPage}
          />
        );

      case "checkout":
        return <Checkout setPage={setPage} />;

      case "payment":
        return <Payment />;

      default:
        return <Home />;
    }
  };

  return renderPage();
}
