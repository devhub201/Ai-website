export async function payNow(amount) {
  const key = import.meta.env.VITE_RAZORPAY_KEY;

  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  document.body.appendChild(script);

  script.onload = () => {
    const options = {
      key,
      amount: amount * 100,
      currency: "INR",
      name: "HostAI",
      description: "Hosting Payment",
      handler: function () {
        alert("Payment Successful ✅");
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
}
