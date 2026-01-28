import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SalesJournal from "./pages/SalesJournal";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Dashboard</Link>
        <Link to="/journal">Sales Journal</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/journal" element={<SalesJournal />} />
      </Routes>
    </BrowserRouter>
  );
}
