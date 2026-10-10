import { contact } from "../../data/contact";
import { FaCheck, FaPhone, FaWhatsapp } from "react-icons/fa6";
import heroImage from "../../assets/images/image.jpeg";
import heroSmall from "../../assets/images/hero-640.webp";
import heroMedium from "../../assets/images/hero-960.webp";
import heroLarge from "../../assets/images/hero-1254.webp";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow" dir="ltr">Rick and GO</span>

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
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              <FaWhatsapp aria-hidden="true" />
              קבלו הצעת מחיר
            </a>

            <a
              href={contact.phone}
              className="button button-secondary"
            >
              <FaPhone aria-hidden="true" />
              התקשרו עכשיו
            </a>
          </div>

          <ul className="hero-benefits">
            <li>
              <FaCheck aria-hidden="true" />
              שירות מהיום להיום
            </li>

            <li>
              <FaCheck aria-hidden="true" />
              10% הנחה לסטודנטים
            </li>

            <li>
              <FaCheck aria-hidden="true" />
              שירות אמין וזהיר
            </li>
          </ul>
        </div>

        <div className="hero-image-wrapper">
          <picture>
            <source
              type="image/webp"
              srcSet={`${heroSmall} 640w, ${heroMedium} 960w, ${heroLarge} 1254w`}
              sizes="(max-width: 600px) calc(100vw - 32px), (max-width: 950px) 580px, (max-width: 1240px) 50vw, 600px"
            />
            <img
              src={heroImage}
              alt="איור הקמע של Rick and GO לצד רכב הובלות"
              className="hero-image"
              width="1254"
              height="1254"
              fetchPriority="high"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
