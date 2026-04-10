export default function Payment() {
  return (
    <div className="page-container">
      <h1>Payment</h1>

      <div className="payment-box glass">
        <h2>Select Payment Method</h2>

        <button className="btn">Pay with Razorpay</button>
        <button className="btn" style={{marginTop:"10px"}}>
          Pay with Stripe
        </button>

        <p style={{marginTop:"20px", opacity:"0.7"}}>
          Secure payments powered by API integration
        </p>
      </div>
    </div>
  );
}
