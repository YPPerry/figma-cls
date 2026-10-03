import { Link } from "react-router-dom";
import logo from "../assets/MPAY LOGO.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-row">
          <Link to="/">
            <img src={logo} alt="MPAY" />
          </Link>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/AboutUs">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Contact">Contact</Link>
            <a href="mailto:support@mpay.com">Support</a>
          </nav>
        </div>
        <div className="footer-bottom">
          © 2026 MPAY. Payments, made more human.
        </div>
      </div>
    </footer>
  );
}
