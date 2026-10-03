import {
  FaArrowRight,
  FaChartPie,
  FaCreditCard,
  FaShieldHalved,
  FaWallet,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaWallet />,
    title: "Payments",
    text: "Send, receive and keep your daily payments moving.",
  },
  {
    icon: <FaChartPie />,
    title: "Money overview",
    text: "Bring balances and recent activity into a clearer view.",
  },
  {
    icon: <FaCreditCard />,
    title: "Cards",
    text: "Keep your card details and everyday spending close.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Account controls",
    text: "Stay on top of the details that help you feel in control.",
  },
];

export default function Services() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <span className="eyebrow">What MPAY can do</span>
          <h1>Everyday money, made easier to manage.</h1>
          <p>
            Simple tools for the things you do most: pay, send, track and stay
            organized.
          </p>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">The essentials</span>
            <h2>Everything you need. Nothing in the way.</h2>
            <p>
              Spend less time hopping between tasks and more time getting on
              with your day.
            </p>
          </div>
          <div className="service-grid">
            {services.map(({ icon, title, text }) => (
              <article className="service-card" key={title}>
                <span className="feature-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cta-band">
          <h2>Have a question about using MPAY?</h2>
          <Link to="/Contact" className="button button-dark">
            Contact our team <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
