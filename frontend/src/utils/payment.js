export function loadRazorpay() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function payNow(amount) {
  const res = await loadRazorpay();

  if (!res) {
    alert("Razorpay failed to load");
    return;
  }

  const options = {
    key: "YOUR_RAZORPAY_KEY",
    amount: amount * 100,
    currency: "INR",
    name: "HostAI",
    description: "Hosting Payment",
    handler: function (response) {
      alert("Payment Success!");
      console.log(response);
    },
    theme: {
      color: "#00ffff"
    }
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
