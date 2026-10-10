import { contact } from "../../data/contact";
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
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              <FaWhatsapp aria-hidden="true" />
              דברו איתנו בוואטסאפ
            </a>

            <a
              href={contact.phone}
              className="button button-outline"
            >
              <FaPhone aria-hidden="true" />
              <bdi dir="ltr">{contact.phoneDisplay}</bdi>
            </a>
          </div>
        </div>

        <aside className="contact-card">
          <h3 dir="ltr">Rick and GO</h3>

          <p>
            הובלות קטנות ובינוניות, אחסון רהיטים, פירוק והרכבה ושירותי הנדימן.
          </p>

          <div className="contact-links">
            <a href={contact.phone}>
              <FaPhone aria-hidden="true" />
              <bdi dir="ltr">{contact.phoneDisplay}</bdi>
            </a>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF aria-hidden="true" />
              <span>עמוד הפייסבוק</span>
            </a>

            <a
              href={contact.googleContact}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle aria-hidden="true" />
              <span>העסק שלנו בגוגל</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
