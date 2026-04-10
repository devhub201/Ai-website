export default function Admin({ setPage }) {
  return (
    <div className="admin-container">

      <div className="admin-sidebar glass">
        <h2>Admin</h2>

        <p onClick={() => setPage("admin")}>Dashboard</p>
        <p onClick={() => setPage("plans")}>Plans</p>
        <p onClick={() => setPage("home")}>Home</p>
      </div>

      <div className="admin-main">

        <h1>Dashboard</h1>

        <div className="analytics-grid">

          <div className="glass stat-card">
            <h3>Users</h3>
            <h1>120</h1>
          </div>

          <div className="glass stat-card">
            <h3>Orders</h3>
            <h1>45</h1>
          </div>

          <div className="glass stat-card">
            <h3>Revenue</h3>
            <h1>₹12,000</h1>
          </div>

        </div>

        {/* AI BOX */}
        <div className="glass ai-admin-box">
          <h2>AI Command</h2>
          <input placeholder="Type: create minecraft plan..." />
          <button className="btn">Run AI</button>
        </div>

      </div>

    </div>
  );
}
