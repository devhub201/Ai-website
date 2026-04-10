export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px",
      alignItems: "center"
    }}>
      <h2 style={{color:"#00ffff"}}>HostAI</h2>

      <div>
        <a style={{margin:"0 15px", cursor:"pointer"}}>Home</a>
        <a style={{margin:"0 15px", cursor:"pointer"}}>Plans</a>
        <a style={{margin:"0 15px", cursor:"pointer"}}>Support</a>
      </div>

      <button className="btn">Dashboard →</button>
    </nav>
  );
}
