const EstimateProcessSection = () => {
  return (
    <section
      className="workprocess_section section_space_sm"
      id="how-to-schedule-service"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_heading pe-lg-5">
              <h2 className="heading_text wow" data-splitting>
                Jak wyglądają kolejne kroki?
              </h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="workprocess_item">
                  <h3 className="item_title">
                    <span className="serial_number">01</span>
                    <span className="title_text">Akceptacja Wyceny</span>
                  </h3>
                  <p className="mb-0">
                    Po otrzymaniu wyceny, zdecyduj, czy akceptujesz
                    przedstawione warunki. W przypadku zgody, przechodzisz do
                    następnego etapu procesu.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="workprocess_item">
                  <h3 className="item_title">
                    <span className="serial_number">02</span>
                    <span className="title_text">
                      Umówienie Terminu Serwisu
                    </span>
                  </h3>
                  <p className="mb-0">
                    Umów dogodny termin serwisu. Staramy się dostosować do
                    Twojego planu, abyś mógł/a spokojnie przekazać nam swoje
                    auto.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="workprocess_item">
                  <h3 className="item_title">
                    <span className="serial_number">03</span>
                    <span className="title_text">
                      Podstawienie Samochodu na Serwis
                    </span>
                  </h3>
                  <p className="mb-0">
                    Przyjedź do naszego serwisu zgodnie z umówionym terminem, a
                    my zajmiemy się resztą. Możesz być pewien/cią, że Twój
                    samochód jest w dobrych rękach.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="workprocess_item">
                  <h3 className="item_title">
                    <span className="serial_number">04</span>
                    <span className="title_text">Odbiór Samochodu</span>
                  </h3>
                  <p className="mb-0">
                    Po zakończeniu prac serwisowych, poinformujemy Cię o
                    gotowości samochodu. Przyjedź, aby odebrać swoje auto, które
                    będzie gotowe do bezpiecznej jazdy.
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

export default EstimateProcessSection;
