const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2026 Karthik</p>

      <div style={links}>
        <a href="https://github.com/karthik527844" target="https://github.com/karthik527844" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/karthik-s-052ab0339/" target="https://www.linkedin.com/in/karthik-s-052ab0339/" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:karthikkarthi527844@gmail.com">Email</a>
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
