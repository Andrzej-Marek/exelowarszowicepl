type ContactFormSectionProps = {};

const ContactFormSection = ({}: ContactFormSectionProps) => {
  return (
    <section className="appointment_form_section section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section_heading">
              <div className="outline_text">Contact Us</div>
              <h3 className="heading_text wow" data-splitting>
                Request An Appointment Online
              </h3>
              <p className="heading_description mb-0">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
            </div>
          </div>
        </div>
        <form action="#">
          <div className="form_wrap row">
            <div className="col-md-6">
              <div className="form-group mb-0">
                <label htmlFor="input_name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="input_name"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-0">
                <label htmlFor="input_phone">Your Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  id="input_phone"
                  placeholder="Enter Your Phone"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-0">
                <label htmlFor="input_date">Select Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  id="input_date"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-0">
                <label htmlFor="input_time">Select Time</label>
                <input
                  type="time"
                  name="time"
                  className="form-control"
                  id="input_time"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="input_textarea">Your Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="input_textarea"
                  placeholder="Describe Your Problem"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <span className="btn_text">Send Now</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
