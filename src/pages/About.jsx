import { Link } from "react-router";
import Reveal from "../components/Reveal";
import { useLanguage } from "../LanguageContext";
import SEO from "../components/SEO";

function About() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <main>
      <SEO
        title="About Launched by Alex | Web Design Studio"
        description="Meet the team behind Launched by Alex and learn how we combine design, development, branding, and strategy to bring ideas to life."
        path="/team"
      />
      <section className="page-hero">
        <p className="section-label">
          {about.label}
        </p>

        <h1>
          {about.title1}
          <br />
          <span>
            {about.title2}
          </span>
        </h1>

        <p>
          {about.description}
        </p>
      </section>

      <section className="content-section team-section">
        <div className="team-grid">
          <Reveal className="portrait-placeholder">
            <img
              src="/Alex.jpg"
              alt="Alex"
              className="team-portrait"
            />
            <div className="member-number">
              01
            </div>

          </Reveal>

          <Reveal className="team-copy">
            <p className="section-label">
              {about.alexRole}
            </p>

            <h2>ALEX</h2>

            <p className="about-lead">
              {about.alexLead}
            </p>

            <p>
              {about.alexText1}
            </p>

            <p>
              {about.alexText2}
            </p>

            <div className="team-skills">
              <span>
                WEB DESIGN
              </span>

              <span>
                DEVELOPMENT
              </span>

              <span>
                BRANDING
              </span>

              <span>
                CREATIVE
              </span>
            </div>

            <Link
              to="/contact"
              className="primary-button"
            >
              {about.workWithUs}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="content-section team-members-section">
        <Reveal className="section-heading">
          <p className="section-label">
            {about.team}
          </p>

          <h2>
            {about.people1}
            <br />
            <span>
              {about.people2}
            </span>
          </h2>
        </Reveal>

        <div className="team-members-grid">
          <Reveal className="team-member-card">
            <div className="team-member-image">
              <img
                src="/Jenny.jpg"
                alt="Jenny"
                className="team-member-photo"
              />

              <div className="member-number">
                02
              </div>
            </div>

            <div className="team-member-info">
              <p>
                {about.salesRole}
              </p>

              <h3>
                JENNY
              </h3>

              <p className="member-description">
                {about.jenny}
              </p>

              <div className="team-skills">
                <span>SALES</span>
                <span>CLIENT RELATIONS</span>
                <span>SUPPORT</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="team-member-card">
            <div className="team-member-image">
              <img
                src="/Debbie.jpg"
                alt="Debbie"
                className="team-member-photo"
              />

              <div className="member-number">
                03
              </div>
            </div>

            <div className="team-member-info">
              <p>
                {about.salesRole}
              </p>

              <h3>
                DEBBIE
              </h3>

              <p className="member-description">
                {about.debbie}
              </p>

              <div className="team-skills">
                <span>SALES</span>
                <span>CUSTOMER SUPPORT</span>
                <span>CLIENT CARE</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="small-cta">
        <Reveal>
          <p className="section-label">
            {about.together}
          </p>

          <h2>
            {about.ready}
          </h2>

          <p>
            {about.readyDescription}
          </p>

          <Link
            to="/contact"
            className="primary-button"
          >
            {about.start}
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

export default About;