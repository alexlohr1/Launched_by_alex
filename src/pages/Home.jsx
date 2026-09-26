import { Link } from "react-router";

import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import { useLanguage } from "../LanguageContext";

function Home() {
  const { t } = useLanguage();
  const home = t.home;

  return (
    <main>
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />


        <div className="orbit orbit-one">
          <span className="orbiter orbiter-a">
            <i className="moon moon-a" />
          </span>

          <span className="orbiter orbiter-b">
            <i className="moon moon-b" />
          </span>

          <span className="orbiter orbiter-c" />
        </div>

        <div className="orbit orbit-two">
          <span className="orbiter orbiter-a">
            <i className="moon moon-a" />
          </span>

          <span className="orbiter orbiter-b" />

          <span className="orbiter orbiter-c">
            <i className="moon moon-b" />
          </span>
        </div>

        <div className="hero-content">
          <div className="status-pill hero-animate hero-delay-1">
            <span className="status-dot" />
            {home.available}
          </div>

          <p className="eyebrow hero-animate hero-delay-2">
            {home.eyebrow}
          </p>

          <div className="hero-title-row">
            <h1 className="hero-animate hero-delay-3">
              {home.hero1}
              <br />
              <span>{home.hero2}</span>
            </h1>

            <div
              className="hero-brand-mark"
              aria-hidden="true"
            >
              <div className="hero-brand-orbit-glow" />

              <img
                src="/Logo.png"
                alt=""
              />
            </div>
          </div>

          <p className="hero-description hero-animate hero-delay-4">
            {home.description}
          </p>

          <div className="hero-actions hero-animate hero-delay-5">
            <Link
              to="/contact"
              className="primary-button"
            >
              {home.start}
            </Link>

            <Link
              to="/work"
              className="outline-button"
            >
              {home.exploreWork}
            </Link>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>{home.scroll}</span>
          <div />
        </div>
      </section>

      <Marquee />

      <section className="content-section intro-section">
        <Reveal>
          <p className="section-label">
            {home.whatWeDo}
          </p>

          <h2 className="statement">
            {home.statement1}
            <br />
            {home.statement2}
            <br />
            <span>
              {home.statement3}
            </span>
          </h2>
        </Reveal>
      </section>

      <section className="content-section">
        <Reveal className="section-heading">
          <p className="section-label">
            {home.capabilities}
          </p>

          <h2>
            {home.everything1}
            <br />
            <span>
              {home.everything2}
            </span>
          </h2>
        </Reveal>

        <div className="home-services">
          {home.services.map(
            (service) => (
              <Reveal
                className="home-service"
                key={service.number}
              >
                <span className="big-number">
                  {service.number}
                </span>

                <div>
                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>
                </div>

                <span className="service-arrow">
                  ↗
                </span>
              </Reveal>
            )
          )}
        </div>

        <Reveal>
          <Link
            to="/services"
            className="primary-button section-button"
          >
            {home.exploreServices}
          </Link>
        </Reveal>
      </section>

      <section className="content-section why-section">
        <Reveal>
          <p className="section-label">
            {home.why}
          </p>

          <h2>
            {home.notJust1}
            <br />
            {home.notJust2}
            <br />
            <span>
              {home.notJust3}
            </span>
          </h2>
        </Reveal>

        <div className="why-grid">
          {home.benefits.map(
            (benefit) => (
              <Reveal
                className="why-card"
                key={benefit.number}
              >
                <span>
                  {benefit.number}
                </span>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.description}
                </p>
              </Reveal>
            )
          )}
        </div>
      </section>

      <section className="content-section about-home">
        <div className="about-grid">
          <Reveal>
            <p className="section-label">
              {home.aboutLabel}
            </p>

            <h2>
              {home.about1}
              <br />
              {home.about2}
              <br />
              <span>
                {home.about3}
              </span>
            </h2>
          </Reveal>

          <Reveal className="about-copy">
            <p className="about-lead">
              {home.aboutLead}
            </p>

            <p>
              {home.aboutText}
            </p>

            <div className="about-values">
              {home.values.map(
                ([number, title, text]) => (
                  <div
                    className="about-value"
                    key={number}
                  >
                    <strong>
                      {number}
                    </strong>

                    <div>
                      <span>
                        {title}
                      </span>

                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="about-actions">
              <Link
                to="/team"
                className="primary-button"
              >
                {home.meetTeam}
              </Link>

              <Link
                to="/process"
                className="outline-button"
              >
                {home.ourProcess}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="giant-cta">
        <Reveal>
          <p>{home.haveIdea}</p>

          <Link to="/contact">
            {home.lets}
            <br />
            <span>
              {home.launchIt}
            </span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

export default Home;