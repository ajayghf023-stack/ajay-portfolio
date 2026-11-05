import { useState } from "react";
import { Menu, Rocket, X } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Journey", "#education"],
  ["Mission Control", "#mission"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-shell">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-mark" aria-hidden="true">
            <Rocket size={17} />
          </span>
          <span>AJAY<span className="accent">.DEV</span></span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div
          id="primary-navigation"
          className={`nav-panel${menuOpen ? " is-open" : ""}`}
        >
          <div className="nav-links">
            {links.map(([label, href]) => (
              <a href={href} key={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </div>
          <a href="#contact" className="nav-button" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
