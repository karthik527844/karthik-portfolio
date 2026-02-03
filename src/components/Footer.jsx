const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2026 Karthik</p>

      <div style={links}>
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:your-email@gmail.com">Email</a>
      </div>
    </footer>
  );
};

const footerStyle = {
  padding: "2rem 1rem",
  textAlign: "center",
  background: "#111",
  color: "#fff",
};

const links = {
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  marginTop: "1rem",
};

export default Footer;
