function Signup() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0f0f0f",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{
        backgroundColor: "#1a1a1a",
        padding: "40px",
        borderRadius: "12px",
        width: "360px",
        border: "1px solid #7c3aed",
        boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)"
      }}>
        <h2 style={{ color: "#ffffff", textAlign: "center", marginBottom: "8px" }}>Create Account</h2>
        <p style={{ color: "#888", textAlign: "center", marginBottom: "24px" }}>Sign up to get started</p>

        <label style={{ color: "#ccc", fontSize: "14px" }}>Full Name</label>
        <input type="text" placeholder="John Doe" style={{
          display: "block", width: "100%", padding: "10px",
          margin: "6px 0 16px", borderRadius: "8px",
          border: "1px solid #7c3aed", backgroundColor: "#0f0f0f",
          color: "#fff", outline: "none", boxSizing: "border-box"
        }} />

        <label style={{ color: "#ccc", fontSize: "14px" }}>Email</label>
        <input type="email" placeholder="you@example.com" style={{
          display: "block", width: "100%", padding: "10px",
          margin: "6px 0 16px", borderRadius: "8px",
          border: "1px solid #7c3aed", backgroundColor: "#0f0f0f",
          color: "#fff", outline: "none", boxSizing: "border-box"
        }} />

        <label style={{ color: "#ccc", fontSize: "14px" }}>Password</label>
        <input type="password" placeholder="••••••••" style={{
          display: "block", width: "100%", padding: "10px",
          margin: "6px 0 24px", borderRadius: "8px",
          border: "1px solid #7c3aed", backgroundColor: "#0f0f0f",
          color: "#fff", outline: "none", boxSizing: "border-box"
        }} />

        <button style={{
          width: "100%", padding: "12px",
          backgroundColor: "#7c3aed", color: "#fff",
          border: "none", borderRadius: "8px",
          fontSize: "16px", cursor: "pointer"
        }}>Sign Up</button>

        <p style={{ color: "#888", textAlign: "center", marginTop: "16px", fontSize: "14px" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#7c3aed", textDecoration: "none" }}>Login</a>
        </p>
      </div>
    </div>
  )
}

export default Signup