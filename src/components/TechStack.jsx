import { proficientSkills, familiarSkills } from "../data/skills";

const TechStack = () => {
  return (
    <section style={{ padding: "3rem 1rem" }}>
      <h2 style={{ textAlign: "center" }}>Tech Stack</h2>

      {/* Proficient Skills */}
      <div style={{ maxWidth: "900px", margin: "2rem auto" }}>
        <h3>Proficient</h3>
        <div style={gridStyle}>
          {proficientSkills.map((skill, index) => (
            <span key={index} style={skillBox} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Familiar Skills */}
      <div style={{ maxWidth: "900px", margin: "2rem auto" }}>
        <h3>Familiar</h3>
        <div style={gridStyle}>
          {familiarSkills.map((skill, index) => (
            <span key={index} style={skillBox} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "1rem",
  marginTop: "1rem",
};

const skillBox = {
  padding: "0.8rem",
  textAlign: "center",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "0.95rem",
};

export default TechStack;
