import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/MPAY LOGO.png";

const links = [
  ["Home", "/"],
  ["About", "/AboutUs"],
  ["Services", "/Services"],
  ["Contact", "/Contact"],
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="MPAY home" />
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <Link to="/Contact" className="button button-primary">
            Get started <span aria-hidden="true">↗</span>
          </Link>
          <button
            className="mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
        <nav
          id="mobile-menu"
          className={`mobile-links${open ? " open" : ""}`}
          aria-label="Mobile navigation"
        >
          {links.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {name}
            </NavLink>
          ))}
          <Link to="/Contact" onClick={() => setOpen(false)}>
            Get started ↗
          </Link>
        </nav>
      </div>
    </header>
  );
}
