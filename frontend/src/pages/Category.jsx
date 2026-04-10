import PlanCard from "../components/PlanCard";

export default function Category({ category }) {

  const plans = [
    {
      title: "Budget Plan",
      price: "₹199",
      tag: "Popular",
      features: ["2GB RAM", "SSD", "Basic Support"]
    },
    {
      title: "Premium Plan",
      price: "₹499",
      tag: "Best",
      features: ["4GB RAM", "NVMe SSD", "DDoS Protection"]
    }
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>{category}</h1>

      <div className="plans-grid">
        {plans.map((p, i) => (
          <PlanCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
