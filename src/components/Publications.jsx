import { publications } from "../data/publications";

const Publications = () => {
  return (
    <section aria-labelledby="publications-heading">
      <h2 id="publications-heading" style={{ textAlign: "center" }}>
        Publications
      </h2>

      <div style={{ maxWidth: "900px", margin: "2rem auto" }}>
        {publications.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            Currently preparing research work in the field of Computer Vision and
            AI-based systems.
          </p>
        ) : (
          <ul style={listStyle}>
            {publications.map((pub, index) => (
              <li key={index} style={itemStyle}>
                <strong>{pub.title}</strong>
                <p>
                  {pub.venue} &nbsp;•&nbsp; {pub.year}
                </p>

                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Publication
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

const listStyle = {
  listStyleType: "none",
  padding: 0,
};

const itemStyle = {
  padding: "1rem",
  borderBottom: "1px solid #e5e7eb",
};

export default Publications;
