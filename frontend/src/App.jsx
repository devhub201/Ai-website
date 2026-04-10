import { useState } from "react";
import AiChat from "./components/AiChat";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="fade-in">

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px"
      }}>
        <h2 style={{ color: "#00ffff" }}>HostAI</h2>

        <div>
          <span onClick={() => setPage("home")}>Home</span>
          <span onClick={() => setPage("hosting")}>Hosting</span>
          <span onClick={() => setPage("cart")}>Cart</span>
          <span onClick={() => setPage("login")}>Login</span>
        </div>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <div className="hero-container">
          <div className="glass hero-card">
            <p className="hero-tag">⚡ AI Powered Hosting</p>
            <h1>Next Gen Hosting Platform</h1>
            <p>
              Fast, secure and AI automated hosting experience for developers
            </p>

            <button
              className="btn"
              onClick={() => setPage("hosting")}
              style={{ marginTop: "20px" }}
            >
              Explore Hosting
            </button>
          </div>
        </div>
      )}

      {/* HOSTING PAGE */}
      {page === "hosting" && (
        <div className="page-container">
          <h1>Hosting Plans</h1>

          <div className="plans-grid">
            <div className="glass plan-card">
              <h2>Basic</h2>
              <p>₹199 / month</p>
              <button className="btn" onClick={() => setPage("cart")}>
                Buy
              </button>
            </div>

            <div className="glass plan-card">
              <h2>Pro</h2>
              <p>₹499 / month</p>
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
          <h1>Your Cart</h1>

          <div className="glass">
            <p>1x Hosting Plan</p>
            <p>Total: ₹499</p>

            <button className="btn" onClick={() => setPage("payment")}>
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* PAYMENT */}
      {page === "payment" && (
        <div className="page-container">
          <h1>Payment</h1>

          <div className="glass payment-box">
            <p>Click below to pay</p>

            <button className="btn">
              Pay ₹499
            </button>
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

      {/* AI CHAT */}
      <AiChat />

    </div>
  );
}
