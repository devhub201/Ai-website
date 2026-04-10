export default function Navbar({ setPage }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px"
    }}>
      <h2 style={{color:"#00ffff"}}>HostAI</h2>

      <div>
        <span onClick={() => setPage("home")}>Home</span>
        <span onClick={() => setPage("plans")} style={{marginLeft:"20px"}}>
          Plans
        </span>
      </div>

      <button className="btn" onClick={() => setPage("login")}>
        Login
      </button>
    </nav>
  );
}
