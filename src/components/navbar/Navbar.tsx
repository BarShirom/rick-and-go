import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          Rick<span>&</span>GO
        </a>

        <nav className="navbar-links">
          <a href="#home">בית</a>
          <a href="#services">שירותים</a>
          <a href="#why-us">למה אנחנו</a>
          <a href="#contact">צור קשר</a>
        </nav>

        <a
          href="https://wa.me/972537201979"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-button"
        >
          קבלו הצעת מחיר
        </a>
      </div>
    </header>
  );
};

export default Navbar;
