import { useState } from "react";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Category from "./pages/Category";

export default function App() {
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;

      case "plans":
        return <Plans setPage={setPage} setCategory={setCategory} />;

      case "category":
        return <Category category={category} />;

      default:
        return <Home />;
    }
  };

  return renderPage();
}
