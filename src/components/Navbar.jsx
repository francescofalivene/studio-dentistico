import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const goToSection = (section) => {
  navigate("/");

  setTimeout(() => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, 100);
};

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <Link to="/" className="logo-wrapper">
            <img 
              src={logo} 
              alt="Studio Associato Cassero Falivene" 
              className="logo-img" 
            />
            <span>Studio Associato Cassero Falivene</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="nav-links">
          <a onClick={() => goToSection("medici")}>Medici</a>
<a onClick={() => goToSection("trattamenti")}>Trattamenti</a>
<a onClick={() => goToSection("contatti")}>Contatti</a>
        </nav>

        {/* Desktop Button */}
        <a
          href="tel:+390814206346"
          className="btn-call desktop-only"
        >
          Chiama Ora
        </a>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
        <a href="#medici" onClick={() => setMenuOpen(false)}>Medici</a>
        <a href="#trattamenti" onClick={() => setMenuOpen(false)}>Trattamenti</a>
        <a href="#contatti" onClick={() => setMenuOpen(false)}>Contatti</a>

        <a
          href="tel:+390814206346"
          className="btn-call mobile-btn"
          onClick={() => setMenuOpen(false)}
        >
          Chiama Ora
        </a>
      </div>
    </header>
  );
}

export default Navbar;