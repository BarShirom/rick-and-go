import { useEffect, useRef, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { contact } from "../../data/contact";
import logo from "../../assets/logo/logo-140.jpeg";
import "./Navbar.css";

const links = [
  { href: "#home", label: "בית" },
  { href: "#services", label: "שירותים" },
  { href: "#why-us", label: "למה אנחנו" },
  { href: "#contact", label: "צור קשר" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnResize = () => setIsOpen(false);
    desktop.addEventListener("change", closeOnResize);
    return () => desktop.removeEventListener("change", closeOnResize);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [isOpen]);

  return (
    <header
      className="navbar"
      ref={headerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <img src={logo} width="140" height="140" alt="Rick and GO, לעמוד הבית" />
        </a>
        <button
          className="navbar-toggle"
          type="button"
          ref={toggleRef}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "סגירת תפריט הניווט" : "פתיחת תפריט הניווט"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
        <nav
          id="primary-navigation"
          aria-label="ניווט ראשי"
          className={`navbar-links${isOpen ? " is-open" : ""}`}
        >
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => {
              // Keep keyboard focus out of the menu when it becomes hidden.
              if (isOpen) toggleRef.current?.focus();
              setIsOpen(false);
            }}>{label}</a>
          ))}
        </nav>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary navbar-button"
        >
          קבלו הצעת מחיר
        </a>
      </div>
    </header>
  );
};

export default Navbar;
