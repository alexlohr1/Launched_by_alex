import { Link } from "react-router";
import Reveal from "../components/Reveal";
import { useLanguage } from "../LanguageContext";
import SEO from "../components/SEO";

function Services() {
  const { t } = useLanguage();
  const page = t.servicesPage;

  return (
    <main>
      <SEO
        title="Web Design Services | Launched by Alex"
        description="Custom web design, development, branding, creative services, hosting, and ongoing website support from Launched by Alex."
        path="/services"
      />
      <section className="page-hero">
        <p className="section-label">
          {page.label}
        </p>

        <h1>
          {page.title1}
          <br />
          <span>
            {page.title2}
          </span>
        </h1>

        <p>
          {page.description}
        </p>
      </section>

      <section className="content-section">
        <div className="services-grid">
          {page.services.map(
            (service) => (
              <Reveal
                key={service.number}
                className={`service-card ${
                  service.featured
                    ? "featured-service"
                    : ""
                }`}
              >
                {service.featured && (
                  <div className="popular-tag">
                    {page.mostPopular}
                  </div>
                )}

                <div className="service-top">
                  <span>
                    {service.number}
                  </span>

                  <span>↗</span>
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <ul>
                  {service.features.map(
                    (feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    )
                  )}
                </ul>

                <div className="service-price">
                  <small>
                    {page.starting}
                  </small>

                  <strong>
                    {service.price}
                  </strong>
                </div>
              </Reveal>
            )
          )}
        </div>
      </section>

      <section className="content-section memberships">
        <Reveal>
          <p className="section-label">
            {page.ongoing}
          </p>

          <h2>
            {page.keep1}
            <br />
            <span>
              {page.keep2}
            </span>
          </h2>

          <p className="section-description">
            {page.keepDescription}
          </p>
        </Reveal>

        <div className="membership-grid">
          {page.memberships.map(
            (membership) => (
              <Membership
                key={membership.name}
                membership={membership}
                page={page}
              />
            )
          )}
        </div>
      </section>

      <section className="small-cta">
        <Reveal>
          <h2>
            {page.unsure}
          </h2>

          <p>
            {page.unsureDescription}
          </p>

          <Link
            to="/contact"
            className="primary-button"
          >
            {page.talk}
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

function Membership({
  membership,
  page,
}) {
  return (
    <Reveal
      className={`membership-card ${
        membership.featured
          ? "membership-featured"
          : ""
      }`}
    >
      {membership.featured && (
        <div className="popular-tag">
          {page.recommended}
        </div>
      )}

      <p className="membership-name">
        {membership.name}
      </p>

      <div className="monthly-price">
        <strong>
          ${membership.price}
        </strong>

        <span>
          {page.month}
        </span>
      </div>

      <ul>
        {membership.features.map(
          (feature) => (
            <li key={feature}>
              {feature}
            </li>
          )
        )}
      </ul>

      <Link to="/contact">
        {page.getStarted}
      </Link>
    </Reveal>
  );
}

export default Services;