import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaShieldHalved,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import hero from "../assets/hero gadges.png";
import phone from "../assets/phone and card grp.png";
import binance from "../assets/🦆 icon _Binance Coin Cryptocurrency_.png";
import quickteller from "../assets/Group (1).png";
import trust from "../assets/🦆 icon _trust wallet_.png";
import paypal from "../assets/🦆 icon _Paypal_.png";

const partners = [
  { name: "Binance", image: binance },
  { name: "Quickteller", image: quickteller },
  { name: "Trust Wallet", image: trust },
  { name: "PayPal", image: paypal },
];
const features = [
  {
    icon: <FaBolt />,
    title: "Move money in moments",
    text: "Send and receive without the busywork.",
  },
  {
    icon: <FaChartLine />,
    title: "See the full picture",
    text: "Keep balances and activity together.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Feel good about every tap",
    text: "A clear, considered way to manage your money.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Your money, in motion</span>
            <h1>
              More life.
              <br />
              <em>Less money</em> admin.
            </h1>
            <p>
              Pay, send, save and keep track of it all in one easy place. MPAY
              gives your everyday money a little more room to move.
            </p>
            <div className="hero-actions">
              <Link to="/Services" className="button button-primary">
                Explore MPAY <FaArrowRight />
              </Link>
              <a href="#features" className="button button-outline">
                See what you can do
              </a>
            </div>
            <p className="hero-note">
              Built for the everyday. Ready when you are.
            </p>
          </div>
          <div className="hero-art">
            <div className="hero-ring" />
            <img
              className="hero-device"
              src={hero}
              alt="MPAY mobile app showing a personal payments dashboard"
            />
            <div className="float-card transfer-card">
              <small>TRANSFER COMPLETE</small>
              <strong>+$240.00</strong>
              <small>Today · 10:42 AM</small>
            </div>
            <div className="float-card balance-card">
              <small>YOUR MONEY, AT A GLANCE</small>
              <strong>Pay · Save · Track</strong>
            </div>
          </div>
        </div>
      </section>
      <div className="ticker" aria-label="Payments made simple">
        <div className="ticker-track">
          {Array.from({ length: 2 }, (_, i) => (
            <span key={i}>
              PAY &nbsp;✳&nbsp; SEND &nbsp;✳&nbsp; SAVE &nbsp;✳&nbsp; STAY IN
              CONTROL &nbsp;✳&nbsp;{" "}
            </span>
          ))}
        </div>
      </div>
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">One app. Fewer steps.</span>
            <h2>Money should move at your speed.</h2>
            <p>
              The tools you reach for most, brought together in a simple,
              confident experience.
            </p>
          </div>
          <div className="feature-grid" id="features">
            {features.map(({ icon, title, text }) => (
              <article className="feature-card" key={title}>
                <span className="feature-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <img
            className="split-image"
            src={phone}
            alt="MPAY cards and mobile account screen"
          />
          <div className="split-copy">
            <span className="section-kicker">Everything in one hand</span>
            <h2>Your money, without the maze.</h2>
            <p>
              Get a clear view of what came in, what went out, and what’s next.
              From a quick transfer to a better handle on your spending, MPAY
              keeps the essentials close.
            </p>
            <Link to="/AboutUs" className="button button-primary">
              Meet MPAY <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Fits right in</span>
            <h2>Made for the way you already pay.</h2>
          </div>
          <div className="partner-row">
            {partners.map(({ name, image }) => (
              <span key={name}>
                <img src={image} alt="" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cta-band">
          <h2>A better money day starts with one tap.</h2>
          <Link to="/Contact" className="button button-dark">
            Get in touch <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
