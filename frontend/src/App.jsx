import { useState } from "react";
import Home from "./pages/Home";

/*
  NOTE:
  Abhi hum simple routing use kar rahe hain (no react-router yet)
  Baad me upgrade karenge when pages increase
*/

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;

      // future pages (already ready structure)
      case "plans":
        return <div style={{padding:"40px"}}>Plans Page Coming Soon</div>;

      case "cart":
        return <div style={{padding:"40px"}}>Cart Page</div>;

      case "checkout":
        return <div style={{padding:"40px"}}>Checkout Page</div>;

      case "admin":
        return <div style={{padding:"40px"}}>Admin Panel</div>;

      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* SIMPLE NAV CONTROL (temporary) */}
      <div style={{
        position: "fixed",
        top: 10,
        right: 10,
        zIndex: 999
      }}>
        <button onClick={() => setPage("home")} className="btn">Home</button>
        <button onClick={() => setPage("plans")} className="btn" style={{marginLeft:"10px"}}>Plans</button>
      </div>

      {renderPage()}
    </div>
  );
}
