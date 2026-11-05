import {
  Code2,
  Database,
  Globe2,
  Layers3,
  Server,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    code: "01",
    skills: ["Java", "JavaScript", "Python"],
  },
  {
    title: "Frontend",
    icon: Globe2,
    code: "02",
    skills: ["HTML5", "CSS3", "React.js"],
  },
  {
    title: "Backend",
    icon: Server,
    code: "03",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    code: "04",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & platforms",
    icon: Wrench,
    code: "05",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Computer science",
    icon: Layers3,
    code: "06",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems"],
  },
];

function Skills() {
  return (
    <section className="section skills section-shell" id="skills">
      <div className="section-heading">
        <span className="eyebrow"><span>02</span> / ENGINEERING TOOLKIT</span>
        <h2>Tools for the <span className="accent">mission.</span></h2>
        <p>Technologies and foundations I work with and continue to explore.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map(({ title, icon: Icon, code, skills }) => (
          <article className="skill-card glass-panel" key={title}>
            <div className="skill-card-top">
              <span className="skill-icon"><Icon size={19} /></span>
              <span className="skill-code">{code} / 06</span>
            </div>
            <h3>{title}</h3>
            <div className="skill-tags">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
