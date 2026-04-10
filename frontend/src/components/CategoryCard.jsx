export default function CategoryCard({ title, onClick }) {
  return (
    <div className="category-card glass" onClick={onClick}>
      <h2>{title}</h2>
      <p>Explore plans →</p>
    </div>
  );
}
