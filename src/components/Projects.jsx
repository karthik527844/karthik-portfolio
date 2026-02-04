import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section style={{ padding: "3rem 1rem", background: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center" }}>Projects</h2>

      <div style={container}>
        {projects.map((project, index) => (
          <div key={index} style={card} className="project-card">
            <h3>{project.title}</h3>
            <p style={{ lineHeight: "1.6" }}>{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={link}
            >
              View GitHub Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const container = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem",
  maxWidth: "1100px",
  margin: "2rem auto",
};

const card = {
  padding: "1.5rem",
  borderRadius: "8px",
  background: "#fff",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
};

const link = {
  display: "inline-block",
  marginTop: "1rem",
  color: "#0066cc",
  textDecoration: "none",
  fontWeight: "500",
};

export default Projects;
