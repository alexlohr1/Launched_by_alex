import { Link } from "react-router";
import Reveal from "../components/Reveal";
import { useLanguage } from "../LanguageContext";

function Process() {
  const { t } = useLanguage();
  const process = t.process;

  return (
    <main>
      <section className="page-hero process-hero">
        <p className="section-label">
          {process.label}
        </p>

        <h1>
          {process.title1}
          <br />
          <span>
            {process.title2}
          </span>
        </h1>

        <p>
          {process.description}
        </p>
      </section>

      <section className="process-list">
        {process.steps.map(
          ([number, title, description]) => (
            <Reveal
              className="process-step"
              key={number}
            >
              <span className="process-number">
                {number}
              </span>

              <h2>
                {title}
              </h2>

              <p>
                {description}
              </p>

              <span className="process-cross">
                +
              </span>
            </Reveal>
          )
        )}
      </section>

      <section className="countdown">
        <Reveal>
          <p>
            {process.final}
          </p>

          <div className="countdown-numbers">
            <span>3</span>
            <span>2</span>
            <span>1</span>
          </div>

          <h2>
            {process.launch}
          </h2>

          <Link
            to="/contact"
            className="primary-button"
          >
            {process.start}
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

export default Process;