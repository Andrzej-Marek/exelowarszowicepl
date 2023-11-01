type WorkProcessSectionProps = {};

const WorkProcessSection = ({}: WorkProcessSectionProps) => {
  return (
    <section
      className="workprocess_section section_space_lg"
      id="how-to-schedule-service"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section_heading pe-lg-5">
              <h2 className="heading_text wow" data-splitting>
                Jak wygląda proces serwisu?
              </h2>
              <p className="heading_description mb-0">
                Cały proces serwisu w naszym warsztacie to prosta i skuteczna
                droga do utrzymania Twojego samochodu w doskonałym stanie. Od
                rezerwacji terminu po odbiór gotowego pojazdu - zapewniamy pełną
                profesjonalność i troskę o Twój komfort jazdy.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="workprocess_item">
                  <h3 className="item_title">
                    <span className="serial_number">01</span>
                    <span className="title_text">Rezerwacja Terminu</span>
                  </h3>
                  <p className="mb-0">
                    Zarezerwuj dogodny termin serwisu online lub telefonicznie,
                    dostosowany do Twojego harmonogramu.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="workprocess_item">
                  <h3 className="item_title">
                    <span className="serial_number">02</span>
                    <span className="title_text">Profesjonalna Diagnoza</span>
                  </h3>
                  <p className="mb-0">
                    Nasi doświadczeni mechanicy dokładnie zdiagnozują problemy
                    Twojego samochodu, zapewniając kompleksową analizę stanu
                    technicznego.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="workprocess_item">
                  <h3 className="item_title">
                    <span className="serial_number">03</span>
                    <span className="title_text">Akceptacja Wyceny</span>
                  </h3>
                  <p className="mb-0">
                    Po dokładnej diagnozie otrzymasz klarowną wycenę naprawy.
                    Zaakceptuj ją, abyśmy mogli rozpocząć pracę.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="workprocess_item">
                  <h3 className="item_title">
                    <span className="serial_number">04</span>
                    <span className="title_text">Odbiór Gotowego Pojazdu</span>
                  </h3>
                  <p className="mb-0">
                    Po udanej naprawie lub konserwacji odbierz swój samochód w
                    doskonałym stanie technicznym i gotowy do jazdy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
