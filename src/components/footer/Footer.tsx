import { FaFacebookF, FaGoogle, FaPhone, FaWhatsapp } from "react-icons/fa6";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>Rick & GO</h3>

          <p>
            הובלות קטנות ובינוניות, שירותי הנדימן, אחסון רהיטים ופירוק והרכבה.
          </p>
        </div>

        <div className="footer-socials">
          <a href="tel:0537201979" aria-label="טלפון">
            <FaPhone />
          </a>

          <a
            href="https://wa.me/972537201979"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61591568684363"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://share.google/aWiRlvcT3Jm6OKIkc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google"
          >
            <FaGoogle />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Rick & GO. כל הזכויות שמורות.
        <br />
        Created by <strong>Bar Shirom</strong>
      </div>
    </footer>
  );
};

export default Footer;
