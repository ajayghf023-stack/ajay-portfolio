import { BookOpen, Code2, GraduationCap, Orbit, Target } from "lucide-react";

const milestones = [
  {
    icon: GraduationCap,
    phase: "NOW · 2ND YEAR",
    title: "Computer Science & Engineering",
    subtitle: "B.Tech · Data Science",
    description:
      "Building a strong academic foundation in computing, data, and problem solving.",
  },
  {
    icon: Code2,
    phase: "IN PROGRESS",
    title: "Full-stack development",
    subtitle: "Learn by building",
    description:
      "Growing practical experience across frontend, backend, and database technologies.",
  },
  {
    icon: BookOpen,
    phase: "ALONG THE WAY",
    title: "Software engineering",
    subtitle: "Projects & fundamentals",
    description:
      "Turning ideas into useful projects while strengthening core engineering skills.",
  },
  {
    icon: Orbit,
    phase: "LONG-TERM DIRECTION",
    title: "Space technology",
    subtitle: "Software for ambitious systems",
    description:
      "Exploring mission systems, satellite software, and the technology behind spaceflight.",
  },
  {
    icon: Target,
    phase: "NORTH STAR",
    title: "ISRO",
    subtitle: "A career aspiration",
    description:
      "A long-term goal to contribute to India's space missions through software engineering.",
  },
];

function Education() {
  return (
    <section className="section journey section-shell" id="education">
      <div className="section-heading">
        <span className="eyebrow"><span>04</span> / THE JOURNEY</span>
        <h2>Learning for the <span className="accent">long flight.</span></h2>
        <p>A path still unfolding, one deliberate step at a time.</p>
      </div>

      <div className="timeline">
        {milestones.map(({ icon: Icon, phase, title, subtitle, description }, index) => (
          <article className="timeline-item" key={title}>
            <div className="timeline-marker"><Icon size={17} /></div>
            <div className="timeline-card glass-panel">
              <span className="timeline-phase">{phase}</span>
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <p>{description}</p>
            </div>
            <span className="timeline-index">0{index + 1}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
