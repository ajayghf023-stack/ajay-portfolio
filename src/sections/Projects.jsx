import { ArrowUpRight, Code2, Orbit, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "ScamShield",
    description:
      "A web application that flags suspicious messages and URLs with rule-based risk analysis.",
    icon: ShieldCheck,
    number: "01",
    status: "Working project",
    technologies: ["React", "Node.js", "JavaScript"],
    accent: "cyan",
  },
  {
    title: "CyberMentor AI",
    description:
      "An AI-powered code security reviewer and developer mentoring platform.",
    icon: Code2,
    number: "02",
    status: "In development",
    technologies: ["React", "Node.js", "PostgreSQL", "Prisma"],
    accent: "blue",
  },
  {
    title: "ORBITOPS",
    description:
      "A space mission planning concept for spacecraft status, timelines, ground stations, and incidents.",
    icon: Orbit,
    number: "03",
    status: "Planned",
    technologies: ["React", "Node.js", "PostgreSQL", "Python"],
    accent: "violet",
  },
];

function Projects() {
  return (
    <section className="section projects section-shell" id="projects">
      <div className="section-heading">
        <span className="eyebrow"><span>03</span> / SELECTED WORK</span>
        <h2>Ideas in <span className="accent">motion.</span></h2>
        <p>Practical software, security thinking, and a view toward space.</p>
      </div>

      <div className="projects-grid">
        {projects.map(({ title, description, icon: Icon, number, status, technologies, accent }) => (
          <article className={`project-card glass-panel ${accent}`} key={title}>
            <div className="project-card-top">
              <span className="project-number">{number} / PROJECT</span>
              <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </div>
            <div className="project-icon"><Icon size={24} /></div>
            <span className="project-status"><span />{status}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-technologies">
              {technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </article>
        ))}
      </div>
      <p className="project-note">
        Project cards describe current work and plans; no demos or repositories are linked yet.
      </p>
    </section>
  );
}

export default Projects;
