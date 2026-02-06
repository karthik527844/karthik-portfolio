import { proficientSkills, familiarSkills } from "../data/skills";

const TechStack = () => {
  return (
    <section aria-labelledby="tech-heading">
      <h2 id="tech-heading" className="section-title">
        Tech Stack
      </h2>

      <div className="tech-group">
        <h3 className="tech-subtitle">Proficient</h3>
        <div className="tech-grid">
          {proficientSkills.map((skill, index) => (
            <span key={index} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="tech-group">
        <h3 className="tech-subtitle">Familiar</h3>
        <div className="tech-grid">
          {familiarSkills.map((skill, index) => (
            <span key={index} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
