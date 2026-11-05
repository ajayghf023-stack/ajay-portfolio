import { ArrowUp, BriefcaseBusiness, Code2, Rocket } from "lucide-react";

const footerLinks = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Journey", "#education"],
  ["Mission Control", "#mission"],
  ["Contact", "#contact"],
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#home" className="logo">
          <span className="logo-mark" aria-hidden="true"><Rocket size={16} /></span>
          <span>AJAY<span className="accent">.DEV</span></span>
        </a>
        <p className="footer-motto">Build. Learn. Explore.</p>
        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Code2 size={17} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <BriefcaseBusiness size={17} />
          </a>
          <a href="#home" aria-label="Back to top"><ArrowUp size={17} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} AJAY.DEV</span>
        <nav aria-label="Footer navigation">
          {footerLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <span>Designed &amp; built with curiosity.</span>
      </div>
    </footer>
  );
}

export default Footer;
