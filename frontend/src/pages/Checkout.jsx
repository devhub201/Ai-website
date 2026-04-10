export default function Checkout({ setPage }) {
  return (
    <div className="page-container">
      <h1>Checkout</h1>

      <div className="checkout-box glass">
        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <input placeholder="Phone Number" />

        <button className="btn" onClick={() => setPage("payment")}>
          Continue to Payment →
        </button>
      </div>
    </div>
  );
}
