import OrbitArtwork from "../components/OrbitArtwork";
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
      <section className="page-hero page-hero--illustrated">
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
        <div className="launch-illustration launch-scene" aria-hidden="true">
          <svg viewBox="0 0 440 450" role="presentation" focusable="false">
            <defs><linearGradient id="rocketHull" x1="0" x2="1"><stop stopColor="#92969d"/><stop offset=".42" stopColor="#fff"/><stop offset="1" stopColor="#9da2a9"/></linearGradient><linearGradient id="rocketFire" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff8db"/><stop offset=".4" stopColor="#ffb337"/><stop offset="1" stopColor="#ff5b13" stopOpacity="0"/></linearGradient></defs>
            <circle cx="230" cy="206" r="158" fill="none" stroke="#ff5b13" strokeOpacity=".12" strokeDasharray="3 12"/>
            <path d="M65 365 H386 M85 379 H367" stroke="#ff5b13" strokeWidth="3" strokeOpacity=".7"/>
            <g className="gantry"><path d="M94 354 V90 H144 V354 M94 112 H144 M94 158 H144 M94 204 H144 M94 250 H144 M94 296 H144" fill="none" stroke="#ff6a26" strokeWidth="5"/><path d="M96 112 L143 158 L96 204 L143 250 L96 296 L143 342" fill="none" stroke="#b65027" strokeWidth="3"/><path d="M87 94 H153 V108 H87 Z M82 348 H161 V363 H82 Z" fill="#f3eee8"/><path d="M144 165 H205 M144 248 H199" stroke="#ff6a26" strokeWidth="7"/><path d="M145 164 L166 146 M145 248 L166 230" stroke="#ff6a26" strokeWidth="3"/><circle cx="144" cy="165" r="7" fill="#fff"/><circle cx="144" cy="248" r="7" fill="#fff"/></g>
            <g className="launch-scene__rocket"><path d="M214 301 Q207 202 221 135 Q234 90 246 70 Q263 100 276 135 Q289 202 282 301 Z" fill="url(#rocketHull)" stroke="#ff6a26" strokeWidth="3"/><path d="M221 136 Q234 90 246 70 Q263 100 276 136 Z" fill="#ff5b13"/><circle cx="248" cy="174" r="19" fill="#121519" stroke="#ff6a26" strokeWidth="6"/><circle cx="243" cy="169" r="6" fill="#f8f2e8" opacity=".8"/><path d="M218 253 L191 310 L218 303 Z M279 253 L305 310 L280 303 Z" fill="#ff5b13"/><path d="M230 300 H268 L263 316 H235 Z" fill="#54545b"/><path className="launch-scene__fire" d="M235 315 Q222 357 249 389 Q277 357 263 315 Z" fill="url(#rocketFire)"/></g>
            <g className="launch-scene__smoke" fill="#d4c7c1"><circle cx="195" cy="362" r="23"/><circle cx="222" cy="367" r="27"/><circle cx="260" cy="363" r="31"/><circle cx="296" cy="370" r="24"/><circle cx="326" cy="376" r="18"/></g>
            <path d="M164 382 H341 L357 399 H150 Z" fill="#ff5b13"/><path d="M150 399 H357 V414 H150 Z" fill="#6e3323"/><path d="M171 414 H190 M317 414 H336" stroke="#f7eee7" strokeWidth="5"/>
            <g className="launch-scene__lights"><circle cx="96" cy="94" r="5" fill="#fff4c7"/><circle cx="144" cy="94" r="5" fill="#ff8b35"/><circle cx="152" cy="350" r="5" fill="#fff4c7"/></g>
          </svg>
        </div>
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

                  <span>↗︎</span>
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

        <div className="membership-flight" aria-hidden="true"><svg viewBox="0 0 520 270" role="presentation"><path className="membership-flight__track" d="M 260 135 C 165 -25 20 20 35 135 C 50 255 180 285 260 135 C 340 -15 470 15 485 135 C 500 255 355 295 260 135" /><circle className="membership-flight__gravity membership-flight__gravity--orange" cx="142" cy="135" r="26"/><circle className="membership-flight__gravity membership-flight__gravity--white" cx="378" cy="135" r="26"/><g className="membership-flight__craft"><path d="M0 -18 L12 13 L0 7 L-12 13 Z" fill="#ff6b28"/><circle cx="0" cy="-2" r="3" fill="#fff"/></g></svg></div>
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