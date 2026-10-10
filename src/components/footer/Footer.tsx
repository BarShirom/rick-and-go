import { contact } from "../../data/contact";
import { FaFacebookF, FaGoogle, FaPhone, FaWhatsapp } from "react-icons/fa6";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="footer-brand-name" dir="ltr">Rick & GO</h2>

          <p>
            הובלות קטנות ובינוניות, שירותי הנדימן, אחסון רהיטים ופירוק והרכבה.
          </p>
        </div>

        <div className="footer-socials">
          <a href={contact.phone} aria-label="טלפון">
            <FaPhone aria-hidden="true" />
          </a>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
          </a>

          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF aria-hidden="true" />
          </a>

          <a
            href={contact.googleFooter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google"
          >
            <FaGoogle aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-bottom" dir="ltr" lang="en">
        <p>© {new Date().getFullYear()} Bar Shirom. All rights reserved.</p>
        <p className="footer-credit">Designed &amp; Developed by Bar Shirom</p>
      </div>
    </footer>
  );
};

export default Footer;
