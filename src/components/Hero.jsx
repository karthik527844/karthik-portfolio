const Hero = () => {
  return (
    <section aria-labelledby="hero-heading" style={{ padding: "4rem 1rem", textAlign: "center" }}>
      <h1 id="hero-heading">Karthik</h1>
      <h2>Gesix GeoAI Intern</h2>

      <p style={{ maxWidth: "720px", margin: "1rem auto", lineHeight: "1.6" }}>
        Information Science Engineering student with hands-on experience in
        computer vision, gesture-based interaction systems, and full-stack web
        development. Proficient in building deployable applications using React,
        AI-driven models, and data visualization tools.
      </p>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
        aria-label="View resume PDF"
      >
        View Resume
      </a>
    </section>
  );
};

export default Hero;
