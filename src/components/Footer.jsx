const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2026 Karthik</p>
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
