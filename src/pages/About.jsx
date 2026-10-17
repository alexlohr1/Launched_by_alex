import OrbitArtwork from "../components/OrbitArtwork";
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
      <section className="page-hero page-hero--illustrated">
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
        <OrbitArtwork variant="team" />
      </section>

      <section className="content-section team-members-section">
        <div className="team-members-grid">
          <Reveal className="team-member-card">
            <div className="team-member-image">
              <img src="/Alex.jpg" alt="Alex" className="team-member-photo" />
              <div className="member-number">01</div>
            </div>
            <div className="team-member-info">
              <p>{about.alexRole}</p>
              <h3>ALEX</h3>
              <p className="member-description">{about.alexText1}</p>
              <div className="team-skills">
                <span>WEB DESIGN</span>
                <span>DEVELOPMENT</span>
                <span>BRANDING</span>
                <span>CREATIVE</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="team-member-card">
            <div className="team-member-image">
              <img src="/Jenny.jpg" alt="Jenny" className="team-member-photo" />
              <div className="member-number">02</div>
            </div>
            <div className="team-member-info">
              <p>{about.salesRole}</p>
              <h3>JENNY</h3>
              <p className="member-description">{about.jenny}</p>
              <div className="team-skills">
                <span>SALES</span>
                <span>CLIENT RELATIONS</span>
                <span>SUPPORT</span>
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