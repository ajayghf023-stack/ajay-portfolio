import { Code2, GraduationCap, Orbit, Rocket, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech · CSE",
    detail: "Data Science · 2nd year",
  },
  {
    icon: Code2,
    label: "Focus",
    value: "Full stack",
    detail: "Building for the web",
  },
  {
    icon: Orbit,
    label: "Curiosity",
    value: "Space tech",
    detail: "Systems beyond Earth",
  },
  {
    icon: Rocket,
    label: "North star",
    value: "ISRO",
    detail: "A long-term aspiration",
  },
];

function About() {
  return (
    <section className="section about section-shell" id="about">
      <div className="section-heading">
        <span className="eyebrow"><span>01</span> / ABOUT THE DEVELOPER</span>
        <h2>Curiosity, meet <span className="accent">craft.</span></h2>
        <p>A little context behind the code and the ambition.</p>
      </div>

      <div className="about-layout">
        <div className="about-copy glass-panel">
          <div className="panel-kicker"><Sparkles size={15} /> MY APPROACH</div>
          <h3>Building today.<br />Exploring what&apos;s next.</h3>
          <p>
            I&apos;m Ajay, a second-year Computer Science and Engineering student
            specializing in Data Science. I enjoy making useful software,
            learning how systems work, and steadily improving my engineering
            fundamentals.
          </p>
          <p>
            From full-stack applications to the software behind space missions,
            I&apos;m motivated by technology that solves real problems. My long-term
            ambition is to contribute to India&apos;s space technology ecosystem.
          </p>
          <div className="motto">
            <span className="motto-line" />
            <span>Build. Learn. Explore.</span>
          </div>
        </div>

        <div className="about-cards">
          {highlights.map(({ icon: Icon, label, value, detail }, index) => (
            <article className="info-card glass-panel" key={label}>
              <span className="card-index">0{index + 1}</span>
              <Icon size={20} aria-hidden="true" />
              <span className="info-label">{label}</span>
              <h3>{value}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
