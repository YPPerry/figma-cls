import { Link } from "react-router-dom";
import team from "../assets/Component 4.png";
import phone from "../assets/phone card image.png";

const values = [
  ["Clarity first", "Money tools should make the next step obvious."],
  ["People over process", "A thoughtful experience for real everyday needs."],
  ["Progress, together", "We keep listening, learning and making it simpler."],
];

export default function AboutUs() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <span className="eyebrow">A little about us</span>
          <h1>Better money habits start with a better experience.</h1>
          <p>
            MPAY brings the everyday pieces of your financial life into one
            place, so you can focus on what matters beyond the screen.
          </p>
        </div>
      </section>
      <section className="section section-light">
        <div className="container split">
          <img
            className="about-image"
            src={team}
            alt="The people behind MPAY"
          />
          <div className="split-copy">
            <span className="section-kicker">Why MPAY</span>
            <h2>We believe money tools can feel human.</h2>
            <p>
              Too many apps make simple things feel complicated. MPAY is built
              around a different idea: useful tools, a clear view, and less
              friction in the moments that matter.
            </p>
            <Link to="/Services" className="button button-dark">
              See what we do ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">What guides us</span>
            <h2>Useful by design.</h2>
          </div>
          <div className="values">
            {values.map(([title, text]) => (
              <article className="value" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container split">
          <div className="split-copy">
            <span className="section-kicker">In your corner</span>
            <h2>Everyday money, with a little more ease.</h2>
            <p>
              From keeping track of a purchase to moving money where it needs to
              go, MPAY is designed to make your next step feel clear.
            </p>
            <Link to="/Contact" className="button button-primary">
              Talk to us ↗
            </Link>
          </div>
          <img
            className="split-image"
            src={phone}
            alt="A closer look at the MPAY mobile app"
          />
        </div>
      </section>
    </>
  );
}
