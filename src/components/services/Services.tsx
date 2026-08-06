import { services } from "../../data/services";
import "./Services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-heading">
          <span className="services-eyebrow">מה אנחנו מציעים</span>

          <h2 className="section-title">כל השירותים במקום אחד</h2>

          <p className="section-description">
            משירותי הובלה ואחסון ועד עבודות הנדימן, פירוק והרכבה ושיפוצים קלים —
            בהתאמה לצורך שלכם.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ title, description, icon: Icon }) => (
            <article className="service-card" key={title}>
              <div className="service-icon">
                <Icon />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
