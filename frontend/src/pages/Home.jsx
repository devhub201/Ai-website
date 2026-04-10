import "../themes/aqua/theme.css";
import Navbar from "../components/Navbar";
import AiChat from "../components/AiChat";

export default function Home({ setPage }) {
  return (
    <div>

      {/* NAVBAR */}
      <Navbar setPage={setPage} />

      {/* HERO SECTION */}
      <div className="hero-container">

        <div className="hero-card glass">

          {/* TAG */}
          <div className="hero-tag">Next Gen Hosting 🚀</div>

          {/* TITLE */}
          <h1>
            Powerful Cloud Hosting <br />
            With AI Automation
          </h1>

          {/* SUBTEXT */}
          <p>
            Launch your servers instantly with premium infrastructure,
            lightning speed performance and futuristic UI experience.
          </p>

          {/* BUTTONS */}
          <div style={{ marginTop: "25px" }}>
            <button
              className="btn"
              onClick={() => setPage("plans")}
            >
              View Plans →
            </button>

            <button
              className="btn"
              style={{
                marginLeft: "15px",
                background: "transparent",
                border: "1px solid cyan",
                color: "white"
              }}
            >
              Explore Features
            </button>
          </div>

        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="features-section">

        <div className="glass feature-card">
          <h3>⚡ Ultra Fast</h3>
          <p>High speed NVMe servers for best performance</p>
        </div>

        <div className="glass feature-card">
          <h3>🤖 AI Powered</h3>
          <p>Create pages, plans and manage hosting using AI</p>
        </div>

        <div className="glass feature-card">
          <h3>🔒 Secure</h3>
          <p>Advanced DDoS protection and secure infrastructure</p>
        </div>

      </div>

      {/* CTA SECTION */}
      <div className="cta-section glass">
        <h2>Ready to launch your hosting?</h2>
        <button className="btn" onClick={() => setPage("plans")}>
          Get Started Now 🚀
        </button>
      </div>

      {/* AI CHAT */}
      <AiChat />

    </div>
  );
}
