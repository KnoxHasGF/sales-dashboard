import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      background: "#1e293b",
      padding: "14px 24px",
      display: "flex",
      gap: "20px"
    }}>
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        Dashboard
      </Link>
      <Link to="/journal" style={{ color: "#fff", textDecoration: "none" }}>
        Sales Journal
      </Link>
    </nav>
  );
}
