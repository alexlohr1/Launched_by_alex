import { Link } from "react-router";
import Reveal from "../components/Reveal";
import { useLanguage } from "../LanguageContext";

function Work() {
  const { t } = useLanguage();
  const work = t.work;

  return (
    <main>
      <section className="page-hero">
        <p className="section-label">
          {work.label}
        </p>

        <h1>
          {work.title1}
          <br />
          <span>
            {work.title2}
          </span>
        </h1>

        <p>
          {work.description}
        </p>
      </section>

      <section className="content-section">
        <div className="portfolio-grid">
          {work.projects.map((project) => (
            <Reveal
              className="portfolio-project-reveal"
              key={project.number}
            >
              <a
                className="portfolio-project"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name}`}
              >
                <div className="portfolio-image">

                  <img
                    src={project.image}
                    alt=""
                    className="portfolio-background"
                  />

                  <div className="portfolio-image-overlay" />

                  <span className="portfolio-number">
                    {project.number}
                  </span>

                  <div className="portfolio-mark">
                    ↗
                  </div>
                </div>

                <div className="portfolio-info">
                  <div>
                    <p>{project.type}</p>

                    <h2>
                      {project.name}
                    </h2>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="small-cta">
        <Reveal>
          <h2>
            {work.next}
          </h2>

          <p>
            {work.nextDescription}
          </p>

          <Link
            to="/contact"
            className="primary-button"
          >
            {work.start}
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

export default Work;