import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { useLanguage } from "../LanguageContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const {
    language,
    setLanguage,
    t,
  } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      {/* LOGO */}
      <Link
        to="/"
        className="nav-logo"
        onClick={closeMenu}
        aria-label="Launched by Alex - Home"
      >
        <span className="nav-logo-frame">
          <img
            src="/Logo_Full.png"
            alt="Launched by Alex"
          />
        </span>
      </Link>

      {/* MOBILE MENU */}
      <button
        type="button"
        className={`menu-button ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span />
        <span />
      </button>

      {/* LINKS */}
      <nav
        className={`nav-links ${open ? "open" : ""}`}
      >
        <NavLink
          to="/"
          onClick={closeMenu}
        >
          {t.nav.home}
        </NavLink>

        <NavLink
          to="/work"
          onClick={closeMenu}
        >
          {t.nav.work}
        </NavLink>

        <NavLink
          to="/services"
          onClick={closeMenu}
        >
          {t.nav.services}
        </NavLink>

        <NavLink
          to="/process"
          onClick={closeMenu}
        >
          {t.nav.process}
        </NavLink>

        <NavLink
          to="/team"
          onClick={closeMenu}
        >
          {t.nav.about}
        </NavLink>

        {/* LANGUAGE */}
        <div className="language-switcher">
          <button
            type="button"
            className={`language ${
              language === "en" ? "active" : ""
            }`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>

          <span>/</span>

          <button
            type="button"
            className={`language ${
              language === "es" ? "active" : ""
            }`}
            onClick={() => setLanguage("es")}
          >
            ES
          </button>
        </div>

        <Link
          to="/contact"
          className="nav-button"
          onClick={closeMenu}
        >
          {t.nav.start}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;