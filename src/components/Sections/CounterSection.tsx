type CounterSectionProps = {};

const CounterSection = ({}: CounterSectionProps) => {
  return (
    <div className="counter_section bg_gray_dark section_space_md">
      <div className="container">
        <div className="counter_items_group row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter_item">
              <div className="counter_value">
                <span className="odometer" data-count="8">
                  99.9
                </span>
                <span>%</span>
              </div>
              <hr />
              <p className="counter_description mb-0">Zadowolonych Klientów</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter_item">
              <div className="counter_value">
                <span className="odometer" data-count="22">
                  4 lat
                </span>
                <span>+</span>
              </div>
              <hr />
              <p className="counter_description mb-0">Działalności Firmy</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter_item">
              <div className="counter_value">
                <span className="odometer" data-count="500">
                  66
                </span>
                <span>+</span>
              </div>
              <hr />
              <p className="counter_description mb-0">
                Pozytywnych Opinii Na Google
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter_item">
              <div className="counter_value">
                <span className="odometer" data-count="99">
                  100
                </span>
                <span>%</span>
              </div>
              <hr />
              <p className="counter_description mb-0">
                Udzielonych Gwarancji Na Wykonane Usługi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
