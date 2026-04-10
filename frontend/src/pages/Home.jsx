import "../themes/aqua/theme.css";
import Navbar from "../components/Navbar";
import AiChat from "../components/AiChat";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <div className="hero-container">
        <div className="hero-card">
          
          <div className="hero-tag">Minecraft Hosting</div>

          <h1>
            Choosing the right plan for your Minecraft server
          </h1>

          <p>
            High performance hosting with modern infrastructure and premium UI.
          </p>

          <button className="btn hero-btn">
            Launch Now 🚀
          </button>

        </div>
      </div>

      <AiChat />
    </div>
  );
}
