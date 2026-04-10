import CategoryCard from "../components/CategoryCard";

export default function Plans({ setPage, setCategory }) {
  const categories = [
    "Minecraft Hosting",
    "VPS Hosting",
    "Web Hosting",
    "Bot Hosting"
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Hosting Categories</h1>

      <div className="category-grid">
        {categories.map((c, i) => (
          <CategoryCard
            key={i}
            title={c}
            onClick={() => {
              setCategory(c);
              setPage("category");
            }}
          />
        ))}
      </div>
    </div>
  );
}
