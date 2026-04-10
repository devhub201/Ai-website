import CartItem from "../components/CartItem";

export default function Cart({ cart, removeFromCart, setPage }) {
  const total = cart.reduce(
    (sum, item) => sum + parseInt(item.price.replace("₹", "")),
    0
  );

  return (
    <div className="page-container">
      <h1>Your Cart</h1>

      <div className="cart-container">
        <div className="cart-left">
          {cart.length === 0 ? (
            <p>No items added</p>
          ) : (
            cart.map((item, i) => (
              <CartItem key={i} item={item} removeFromCart={removeFromCart} />
            ))
          )}
        </div>

        <div className="cart-right glass">
          <h2>Total</h2>
          <h1>₹{total}</h1>

          <button className="btn" onClick={() => setPage("checkout")}>
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
}
