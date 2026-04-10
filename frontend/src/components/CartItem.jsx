export default function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item glass">
      <div>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
      </div>

      <button className="btn remove-btn" onClick={() => removeFromCart(item)}>
        ✕
      </button>
    </div>
  );
}
