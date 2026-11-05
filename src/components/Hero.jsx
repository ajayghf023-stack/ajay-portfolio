import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";

const SpaceScene = lazy(() => import("./SpaceScene"));

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

function SpaceFallback() {
  return (
    <div className="scene-fallback" aria-hidden="true">
      <div className="fallback-orbit fallback-orbit-one" />
      <div className="fallback-orbit fallback-orbit-two" />
      <div className="fallback-planet">
        <span className="fallback-land fallback-land-one" />
        <span className="fallback-land fallback-land-two" />
      </div>
      <div className="fallback-satellite">
        <span />
        <span />
      </div>
      <div className="fallback-star fallback-star-one" />
      <div className="fallback-star fallback-star-two" />
      <div className="fallback-star fallback-star-three" />
    </div>
  );
}

function Hero() {
  const [use3D, setUse3D] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const compactViewport = window.matchMedia("(max-width: 760px)");
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateScene = () => {
      setReducedMotion(motionPreference.matches);
      setUse3D(supportsWebGL() && !compactViewport.matches);
    };

    updateScene();
    compactViewport.addEventListener("change", updateScene);
    motionPreference.addEventListener("change", updateScene);

    return () => {
      compactViewport.removeEventListener("change", updateScene);
      motionPreference.removeEventListener("change", updateScene);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-photo-shade" aria-hidden="true" />
      <div className="hero-stars" aria-hidden="true" />

      <div className="hero-content">
        <div className="status">
          <span className="status-dot" />
          <span>Available for opportunities</span>
        </div>

        <p className="intro">HELLO, WORLD! I&apos;M</p>
        <h1>AJAY<span className="accent">.</span></h1>
        <h2>
          Full Stack Developer
          <span className="hero-role">Future Space Software Engineer</span>
        </h2>
        <p className="hero-description">
          I build thoughtful web experiences, explore emerging technology, and
          turn ideas into practical software. Currently pursuing B.Tech in
          Computer Science and Engineering (Data Science).
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a href="#contact" className="secondary-button">
            Contact me
          </a>
        </div>

        <div className="hero-socials" aria-label="Social profiles">
          <span>CONNECT</span>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 size={17} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={17} />
          </a>
          <span className="social-divider" />
          <span className="tech-label"><Code2 size={15} /> BUILD. LEARN. EXPLORE.</span>
        </div>
      </div>

      <div className="hero-scene" role="img" aria-label="Interactive space scene">
        {use3D ? (
          <Suspense fallback={<SpaceFallback />}>
            <SpaceScene reducedMotion={reducedMotion} />
          </Suspense>
        ) : (
          <SpaceFallback />
        )}
      </div>

      <a className="scroll-cue" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} />
      </a>
      <div className="hero-coordinate" aria-hidden="true">SOFTWARE · SPACE TECHNOLOGY</div>
    </section>
  );
}

export default Hero;
