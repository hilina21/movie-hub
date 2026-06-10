import { X } from 'lucide-react';

function Login() {
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
        boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
        position: "relative"
      }}>
        <a href="/" style={{ position: "absolute", top: "16px", right: "16px", color: "#888", cursor: "pointer" }}>
          <X size={24} />
        </a>
        <h2 style={{ color: "#ffffff", textAlign: "center", marginBottom: "8px" }}>Welcome Back</h2>
        <p style={{ color: "#888", textAlign: "center", marginBottom: "24px" }}>Login to your account</p>

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
        }}>Login</button>

        <p style={{ color: "#888", textAlign: "center", marginTop: "16px", fontSize: "14px" }}>
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "#7c3aed", textDecoration: "none" }}>Sign Up</a>
        </p>
      </div>
    </div>
  )
}

export default Login