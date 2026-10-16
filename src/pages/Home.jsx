import { Link } from "react-router";

import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import { useLanguage } from "../LanguageContext";
import SEO from "../components/SEO";

function Home() {
  const { t } = useLanguage();
  const home = t.home;

  return (
    <main>
      <SEO
        title="Launched by Alex | Web Design & Development"
        description="Launched by Alex creates custom websites, brands, and digital experiences designed to turn ambitious ideas into reality."
        path="/"
      />
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />


        <div className="home-orbit-core" aria-hidden="true" />
        <div className="orbit orbit-three" aria-hidden="true">
          <span className="orbiter orbiter-a"><i className="moon moon-a" /></span>
          <span className="orbiter orbiter-b" />
        </div>
        <div className="orbit orbit-four" aria-hidden="true">
          <span className="orbiter orbiter-a"><i className="moon moon-b" /></span>
          <span className="orbiter orbiter-c" />
        </div>
        <div className="home-orbit-flight" aria-hidden="true">
          <svg viewBox="0 0 800 800"><circle cx="400" cy="400" r="365" fill="none" stroke="currentColor" strokeDasharray="3 14" opacity=".28" /></svg>
          <span className="home-orbit-craft"><svg viewBox="0 0 28 40"><path d="M14 0 C22 8 24 20 22 30 L14 26 L6 30 C4 20 6 8 14 0Z" fill="#f4f4f5" stroke="#ff5b13" strokeWidth="2"/><path d="M10 29 L14 40 L18 29" fill="#ff5b13"/><circle cx="14" cy="15" r="4" fill="#ff5b13"/></svg></span>
        </div>

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
        <div className="intro-layout">
          <Reveal className="intro-launch" >
            <div className="launch-scene" aria-hidden="true">
              <svg className="launch-arc" viewBox="0 0 520 430" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M 75 365 Q 135 105 455 65" pathLength="100" />
                <circle cx="75" cy="365" r="6" className="launch-origin" />
                <circle cx="455" cy="65" r="4" className="launch-destination" />
              </svg>
              <div className="launch-rocket">
                <svg viewBox="0 0 64 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 5C18 19 15 39 18 67H46C49 39 46 19 32 5Z" fill="currentColor" />
                  <path d="M32 5C26 12 22 20 20 29H44C42 20 38 12 32 5Z" fill="#FB7449" />
                  <circle cx="32" cy="42" r="9" fill="#111827" stroke="#FB7449" strokeWidth="3" />
                  <path d="M18 54L8 72V82L22 71M46 54L56 72V82L42 71" fill="#FB7449" />
                  <path className="rocket-flame" d="M25 69Q26 85 32 98Q38 85 39 69Z" fill="#FB7449" />
                </svg>
              </div>
              <span className="launch-star launch-star-one" />
              <span className="launch-star launch-star-two" />
              <span className="launch-star launch-star-three" />
            </div>
          </Reveal>
          <Reveal className="intro-copy">
            <p className="section-label">{home.whatWeDo}</p>
            <h2 className="statement">
              {home.statement1}
              <br />
              {home.statement2}
              <br />
              <span>{home.statement3}</span>
            </h2>
          </Reveal>
        </div>
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
                  ↗︎
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
        <div className="why-feature-row">
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

        <div className="why-engine-panel" aria-hidden="true">
          <svg className="why-engine" viewBox="0 0 460 180" fill="none">
            <defs><linearGradient id="thrustOuter" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#ff5b13"/><stop offset=".55" stopColor="#ff9b31"/><stop offset="1" stopColor="#ff5b13" stopOpacity="0"/></linearGradient><linearGradient id="thrustCore" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#fffde8"/><stop offset=".6" stopColor="#ffd072"/><stop offset="1" stopColor="#ff9b31" stopOpacity="0"/></linearGradient></defs>
            <g className="engine-svg-thrust"><path d="M245 58 Q305 26 359 64 L452 90 L360 116 Q306 154 245 122 Z" fill="url(#thrustOuter)"/><path d="M245 74 Q309 56 364 83 L426 90 L364 97 Q309 124 245 106 Z" fill="url(#thrustCore)"/></g>
            <path d="M25 36 H145 L184 57 V123 L145 144 H25 L45 115 V65 Z" fill="#c8c8cc" stroke="#ff5b13" strokeWidth="3" />
            <path d="M25 36 H145 L184 57 L156 68 H50 Z" fill="#f5f4f2" />
            <path d="M25 144 H145 L184 123 L156 112 H50 Z" fill="#88888e" />
            <path d="M184 57 L224 40 V140 L184 123 Z" fill="#f4f1ed" stroke="#ff5b13" strokeWidth="3" />
            <path d="M224 40 L246 57 V123 L224 140 Z" fill="#a5a5ab" stroke="#ff5b13" strokeWidth="3" />
            <path d="M55 48 V132 M76 45 V135 M97 44 V136" stroke="#3c3c40" strokeWidth="5" opacity=".55" />
          </svg>
          <span className="why-engine-spark why-engine-spark--a" />
          <span className="why-engine-spark why-engine-spark--b" />
        </div>
        </div>

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