import { FaFacebookF, FaGoogle, FaPhone, FaWhatsapp } from "react-icons/fa6";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container contact-container">
        <div className="contact-content">
          <span className="contact-eyebrow">דברו איתנו</span>

          <h2 className="section-title">צריכים הובלה או שירות לבית ולעסק?</h2>

          <p className="section-description">
            שלחו הודעה או התקשרו, ונשמח להתאים עבורכם פתרון מהיר, מקצועי ובמחיר
            הוגן.
          </p>

          <div className="contact-actions">
            <a
              href="https://wa.me/972537201979"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button contact-button-primary"
            >
              <FaWhatsapp />
              דברו איתנו בוואטסאפ
            </a>

            <a
              href="tel:0537201979"
              className="contact-button contact-button-secondary"
            >
              <FaPhone />
              053-720-1979
            </a>
          </div>
        </div>

        <aside className="contact-card">
          <h3>Rick and GO</h3>

          <p>
            הובלות קטנות ובינוניות, אחסון רהיטים, פירוק והרכבה ושירותי הנדימן.
          </p>

          <div className="contact-links">
            <a href="tel:0537201979">
              <FaPhone />
              <span>053-720-1979</span>
            </a>

            <a
              href="https://wa.me/972537201979"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591568684363"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
              <span>עמוד הפייסבוק</span>
            </a>

            <a
              href="https://share.google/aWiRlvcT3Jm6OKIkc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle />
              <span>העסק שלנו בגוגל</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
