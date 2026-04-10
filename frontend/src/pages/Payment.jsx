import { payNow } from "../utils/payment";

export default function Payment() {
  return (
    <div className="page-container">
      <h1>Payment</h1>

      <div className="payment-box glass">
        <h2>Complete Your Payment</h2>

        <button className="btn" onClick={() => payNow(499)}>
          Pay ₹499
        </button>

        <p style={{marginTop:"15px", opacity:"0.7"}}>
          Secure payment powered by Razorpay
        </p>
      </div>
    </div>
  );
}
