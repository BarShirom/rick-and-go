import { FaCheck, FaPhone, FaWhatsapp } from "react-icons/fa6";
import heroImage from "../../assets/images/ChatGPT Image Aug 6, 2026, 12_29_08 PM.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">Rick and GO</span>

          <h1>
            הובלות קטנות ובינוניות
            <span> במהירות ובזהירות</span>
          </h1>

          <p className="hero-description">
            הובלת דירות, משרדים, רהיטים, מוצרי חשמל ופריטים בודדים, עם שירות
            מקצועי, אדיב וזהיר.
          </p>

          <div className="hero-actions">
            <a
              href="https://wa.me/972537201979"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button-primary"
            >
              <FaWhatsapp />
              קבלו הצעת מחיר
            </a>

            <a
              href="tel:0537201979"
              className="hero-button hero-button-secondary"
            >
              <FaPhone />
              התקשרו עכשיו
            </a>
          </div>

          <ul className="hero-benefits">
            <li>
              <FaCheck />
              שירות מהיום להיום
            </li>

            <li>
              <FaCheck />
              10% הנחה לסטודנטים
            </li>

            <li>
              <FaCheck />
              שירות אמין וזהיר
            </li>
          </ul>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="שירותי הובלות של Rick and GO"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
