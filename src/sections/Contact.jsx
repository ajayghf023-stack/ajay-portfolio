import { ArrowUpRight, BriefcaseBusiness, Code2, Send } from "lucide-react";

function Contact() {
  const email = "your-email@example.com";

  return (
    <section className="section contact section-shell" id="contact">
      <div className="contact-orb" aria-hidden="true" />
      <div className="contact-content">
        <span className="eyebrow"><span>06</span> / OPEN CHANNEL</span>
        <h2>Have a good idea?<br /><span className="accent">Let&apos;s build it.</span></h2>
        <p>
          I&apos;m always glad to connect about software, technology, and
          opportunities to learn and collaborate.
        </p>
        <a
          href={`mailto:${email}?subject=Let%27s%20connect`}
          className="primary-button contact-button"
        >
          <Send size={16} /> Send an email <ArrowUpRight size={16} />
        </a>
        <div className="contact-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Code2 size={17} /> GitHub <ArrowUpRight size={13} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <BriefcaseBusiness size={17} /> LinkedIn <ArrowUpRight size={13} />
          </a>
        </div>
        <span className="contact-note">Replace the email placeholder with your preferred contact address.</span>
      </div>
    </section>
  );
}

export default Contact;
