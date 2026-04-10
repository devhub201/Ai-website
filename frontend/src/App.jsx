import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="fade-in">

      {/* NAV */}
      <nav style={{ padding: "20px 40px", display: "flex", gap: "20px" }}>
        <span onClick={() => setPage("home")}>Home</span>
        <span onClick={() => setPage("hosting")}>Hosting</span>
        <span onClick={() => setPage("cart")}>Cart</span>
        <span onClick={() => setPage("login")}>Login</span>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <div className="hero-container">
          <div className="glass hero-card">
            <p className="hero-tag">AI Hosting</p>
            <h1>HostAI Platform</h1>
            <p>Fast and powerful hosting UI</p>
            <button className="btn" onClick={() => setPage("hosting")}>
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* HOSTING */}
      {page === "hosting" && (
        <div className="page-container">
          <h1>Plans</h1>

          <div className="plans-grid">
            <div className="glass plan-card">
              <h2>Basic</h2>
              <p>₹199</p>
              <button className="btn" onClick={() => setPage("cart")}>
                Buy
              </button>
            </div>

            <div className="glass plan-card">
              <h2>Pro</h2>
              <p>₹499</p>
              <button className="btn" onClick={() => setPage("cart")}>
                Buy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CART */}
      {page === "cart" && (
        <div className="page-container">
          <div className="glass">
            <h2>Cart</h2>
            <p>1 Item</p>
            <button className="btn" onClick={() => setPage("payment")}>
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* PAYMENT */}
      {page === "payment" && (
        <div className="page-container">
          <div className="glass">
            <h2>Payment Page</h2>
            <button className="btn">Pay Now</button>
          </div>
        </div>
      )}

      {/* LOGIN */}
      {page === "login" && (
        <div className="login-container">
          <div className="glass login-box">
            <h2>Login</h2>
            <input placeholder="Email" />
            <input placeholder="Password" type="password" />
            <button className="btn">Login</button>
          </div>
        </div>
      )}

    </div>
  );
}
