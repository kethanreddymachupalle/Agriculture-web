import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">🌾AgriGuide</div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>  🏠 Home</Link>
        <Link to="/profile" onClick={() => setMenuOpen(false)}>  👤 Profile</Link>
        <Link to="/Help" onClick={() => setMenuOpen(false)}>❓ Help</Link>
        <Link to="/signup" onClick={() => setMenuOpen(false)}>➕ Login/Sign Up</Link>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;
