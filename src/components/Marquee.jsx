import { useLanguage } from "../LanguageContext";

function Marquee() {
  const { t } = useLanguage();

  return (
    <section className="marquee">
      <div className="marquee-track">
        <span>{t.marquee}</span>
        <span>{t.marquee}</span>
        <span>{t.marquee}</span>
        <span>{t.marquee}</span>
      </div>
    </section>
  );
}

export default Marquee;