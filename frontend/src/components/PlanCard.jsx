export default function PlanCard({ title, price, features, tag }) {
  return (
    <div className="plan-card glass">

      {tag && <div className="plan-tag">{tag}</div>}

      <h2>{title}</h2>
      <h3>{price}</h3>

      <ul>
        {features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <button className="btn">Get Started</button>
    </div>
  );
}
