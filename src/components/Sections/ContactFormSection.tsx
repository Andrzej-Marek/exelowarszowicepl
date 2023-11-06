import ContactForm from "../ContactForm";

type ContactFormSectionProps = {
  title?: string;
  description?: string;
  backText?: string;
};

const ContactFormSection = ({
  backText,
  description,
  title,
}: ContactFormSectionProps) => {
  return (
    <section className="appointment_form_section section_space_sm">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section_heading">
              <div className="outline_text">{backText}</div>
              {title && (
                <h3 className="heading_text wow" data-splitting>
                  {title}
                </h3>
              )}
              {description && (
                <p className="heading_description mb-0">{description}</p>
              )}
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactFormSection;
