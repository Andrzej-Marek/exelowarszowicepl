type ContactDetailsSectionProps = {};

const ContactDetailsSection = ({}: ContactDetailsSectionProps) => {
  return (
    <section className="contact_section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact_info_box">
              <h3 className="item_title">Adres</h3>
              <ul className="info_list unordered_list_block pe-lg-2">
                <li>
                  <span className="info_text mb-3">
                    ul. Pszczyńska 116 <br /> 43-254 Warszowice
                  </span>
                  <span className="info_text mb-3">NIP: 6381838601</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact_info_box">
              <h3 className="item_title">Godziny otwarcia</h3>
              <ul className="info_list unordered_list_block">
                <li>
                  <span className="info_text d-flex align-items-center justify-content-between">
                    <span>Poniedziałek - Piątek</span>
                    <span>7:00 - 15:00</span>
                  </span>
                </li>

                <li>
                  <span className="info_text d-flex align-items-center justify-content-between">
                    <span>Sobota</span>
                    <span>Zamknięte</span>
                  </span>
                </li>
                <li>
                  <span className="info_text d-flex align-items-center justify-content-between">
                    <span>Niedziela</span>
                    <span>Zamknięte</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact_info_box">
              <h3 className="item_title">Kontakt</h3>
              <ul className="info_list unordered_list_block">
                <li>
                  <span className="info_text mb-3">
                    <span className="d-block">
                      <a href="tel:+48789781811">+48 789 781 811</a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="info_text">
                    <span className="d-block">
                      <a href="mailto:+8801680636189">firma.exelo@gmail.com</a>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12">
            <div className="gmap_canvas">
              <iframe
                title="Lokalizacja - mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.8870632078365!2d18.7340031!3d49.994726799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716b32d1538ba93%3A0x1cd5bd1deb5cdb37!2sSerwis%20Samochodowy%20-%20Darmowa%20wycena%20telefoniczna%20%7C%20EXELO!5e0!3m2!1spl!2spl!4v1698824961441!5m2!1spl!2spl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
