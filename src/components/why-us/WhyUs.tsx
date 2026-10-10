import "./WhyUs.css";
import { advantages } from "../../data/advantages";

const WhyUs = () => {
  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <div className="why-us-header">
          <span className="why-us-eyebrow">למה לבחור בנו</span>

          <h2 className="section-title">למה לבחור ב־Rick and GO?</h2>

          <p className="section-description">
            אנחנו מאמינים ששירות טוב מתחיל באמינות, ממשיך בזמינות ומסתיים בלקוח
            מרוצה.
          </p>
        </div>

        <div className="why-us-grid">
          {advantages.map(({ icon: Icon, title, description }) => (
            <article key={title} className="advantage-card">
              <div className="advantage-icon">
                <Icon aria-hidden="true" />
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

export default WhyUs;
