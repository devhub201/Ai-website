import PlanCard from "../components/PlanCard";

export default function Category({ category, addToCart }) {
  const plans = [
    {
      title: "Budget Plan",
      price: "₹199",
      features: ["2GB RAM", "SSD", "Basic Support"]
    },
    {
      title: "Premium Plan",
      price: "₹499",
      features: ["4GB RAM", "NVMe SSD", "DDoS Protection"]
    }
  ];

  return (
    <div className="page-container">
      <h1>{category}</h1>

      <div className="plans-grid">
        {plans.map((p, i) => (
          <div key={i} onClick={() => addToCart(p)}>
            <PlanCard {...p} />
          </div>
        ))}
      </div>
    </div>
  );
}
