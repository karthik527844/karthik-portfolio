const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{ padding: "4rem 1rem", textAlign: "center" }}
    >
      <h1 id="hero-heading">Karthik S</h1>
      <h2>Gesix GeoAI Intern | Full Stack</h2>
      <p style={{ maxWidth: "700px", margin: "1rem auto" }}>
        Information Science Engineering student with hands-on experience in
        computer vision, gesture-based interaction systems, and full-stack web
        development. Proficient in building deployable applications using React,
        AI-driven models, and data visualization tools.
      </p>

      {/* Social Icons */}
      <div className="hero-icons">
        {/* GitHub */}
        <a
          href="https://github.com/karthik527844"
          target="https://github.com/karthik527844"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.17a11 11 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.48 3.17-1.17 3.17-1.17.64 1.6.24 2.78.12 3.07.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.39-5.25 5.67.42.36.8 1.07.8 2.16v3.2c0 .31.21.66.79.55A11.52 11.52 0 0023.5 12C23.5 5.74 18.27.5 12 .5z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/karthik-s-052ab0339/"
          target="https://www.linkedin.com/in/karthik-s-052ab0339/"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.98 3.5C3.33 3.5 2 4.84 2 6.5s1.33 3 2.98 3h.02c1.65 0 2.98-1.34 2.98-3s-1.33-3-3-3zM2.4 21h5.17V9H2.4v12zM9.34 9H14.3v1.64h.07c.69-1.23 2.38-2.53 4.9-2.53 5.24 0 6.21 3.45 6.21 7.94V21h-5.18v-4.96c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.61V21H9.34V9z" />
          </svg>
        </a>

        {/* Email */}
        <a href="mailto:karthikkarthi527844@gmail.com" aria-label="Send Email">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2 4h20v16H2V4zm10 9L4 6h16l-8 7z" />
          </svg>
        </a>

        {/* Phone */}
        <a href="tel:+916360952674" aria-label="Call phone number">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.25 1.01l-2.2 2.19z" />
          </svg>
        </a>
      </div>

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
