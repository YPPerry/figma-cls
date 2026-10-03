import { useState, type FormEvent } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <span className="eyebrow">We’re here for you</span>
          <h1>Let’s make your next money move easier.</h1>
          <p>
            Questions, feedback, or just want to say hello? Send a note to the
            MPAY team.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div className="split-copy">
            <span className="section-kicker">Get in touch</span>
            <h2>We’d love to hear from you.</h2>
            <p>
              Tell us what’s on your mind and our team will point you in the
              right direction.
            </p>
            <div className="contact-list">
              <div>
                <strong>Email</strong>
                <span>support@mpay.com</span>
              </div>
              <div>
                <strong>Phone</strong>
                <span>+234 567 9805 606</span>
              </div>
              <div>
                <strong>Availability</strong>
                <span>Here when you need a hand</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <label>
              Name
              <input
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                placeholder="How can we help?"
                required
              />
            </label>
            <button className="button button-primary" type="submit">
              {sent ? "Message ready" : "Send message ↗"}
            </button>
            {sent && (
              <p className="form-success" role="status">
                Thanks for reaching out. Your message is ready for the MPAY
                team.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
