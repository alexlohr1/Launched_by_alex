import { Link } from "react-router";
import { useLanguage } from "../LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-brand-section">
        <Link
          to="/"
          className="footer-brand"
          aria-label="Launched by Alex - Home"
        >
          <img
            src="/Logo_Full.png"
            alt="Launched by Alex"
            className="footer-logo"
          />
        </Link>

        <p className="footer-tagline">
          {t.footer.tagline}
        </p>
      </div>

      <div className="footer-links">
        <Link to="/">
          {t.nav.home}
        </Link>

        <Link to="/work">
          {t.nav.work}
        </Link>

        <Link to="/services">
          {t.nav.services}
        </Link>

        <Link to="/process">
          {t.nav.process}
        </Link>

        <Link to="/team">
          {t.nav.about}
        </Link>

        <Link to="/contact">
          {t.nav.contact}
        </Link>
      </div>

      <button
        type="button"
        className="back-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        {t.footer.backTop}
      </button>
    </footer>
  );
}

export default Footer;