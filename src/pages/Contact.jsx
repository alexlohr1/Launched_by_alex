import Reveal from "../components/Reveal";
import { useLanguage } from "../LanguageContext";
import SEO from "../components/SEO";

function Contact() {
  const { t } = useLanguage();
  const contact = t.contact;

    const handleSubmit = async (event) => {
      event.preventDefault();

      const form = event.currentTarget;
      const formData = new FormData(form);

      try {
        const response = await fetch(
          "https://formspree.io/f/meaoldrd",
          {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (response.ok) {
          alert(contact.alert);
          form.reset();
        } else {
          alert(
            "Something went wrong. Please try again."
          );
        }
      } catch (error) {
        alert(
          "Something went wrong. Please try again."
        );
      }
    };

  return (
    <main>
      <SEO
        title="Start a Web Design Project | Launched by Alex"
        description="Have a website, branding, or digital project in mind? Contact Launched by Alex to discuss your project and start building."
        path="/contact"
      />
      <section className="page-hero contact-page-hero">
        <p className="section-label">
          {contact.label}
        </p>

        <h1>
          {contact.title1}
          <br />
          <span>
            {contact.title2}
          </span>
        </h1>

        <p>
          {contact.description}
        </p>
      </section>

      <section className="content-section">
        <div className="contact-layout">
          <Reveal>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <FormField
                  label={contact.name}
                  type="text"
                  placeholder={
                    contact.namePlaceholder
                  }
                />

                <FormField
                  label={contact.email}
                  type="email"
                  placeholder={
                    contact.emailPlaceholder
                  }
                />
              </div>

              <div className="form-field">
                <label htmlFor="service">
                  {contact.need}
                </label>

                <div className="select-wrapper">
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      {contact.chooseService}
                    </option>

                    {contact.serviceOptions.map(
                      (option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      )
                    )}
                  </select>

                  <span className="select-arrow">
                    ⌄
                  </span>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="budget">
                  {contact.budget}
                </label>

                <div className="select-wrapper">
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      {contact.chooseBudget}
                    </option>

                    {contact.budgetOptions.map(
                      (option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      )
                    )}
                  </select>

                  <span className="select-arrow">
                    ⌄
                  </span>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">
                  {contact.message}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder={
                    contact.messagePlaceholder
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="primary-button form-submit"
              >
                {contact.send}
              </button>

              <small className="form-note">
                {contact.development}
              </small>
            </form>
          </Reveal>

          <Reveal className="contact-sidebar">
            <div className="contact-brand">
              <img
                src="/Logo_Full_Text.png"
                alt="Launched by Alex — Modern Websites. Real Results."
              />
            </div>

            <p className="section-label">
              {contact.direct}
            </p>

            <div className="contact-detail">
              <span>
                {contact.email}
              </span>

              <a href="mailto:info@launchedbyalex.com">
                info@launchedbyalex.com
              </a>
            </div>

            <div className="contact-detail">
              <span>
                {contact.phone}
              </span>

              <a href="tel:786-216-5254">
                786-216-5254
              </a>
            </div>

            <div className="availability-card">
              <span className="status-dot" />

              <div>
                <strong>
                  {contact.accepting}
                </strong>

                <p>
                  {contact.booking}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function FormField({
  label,
  type,
  placeholder,
}) {
  const id =
    type === "email"
      ? "email"
      : "name";

  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Contact;