import { navLinks } from "@/router/navLinks";
import Image from "next/image";
import Link from "next/link";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <footer className="site_footer">
      <div className="footer_content_area section_space_sm bg_gray_dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer_about pe-lg-5">
                <div className="site_logo">
                  <Link
                    className="site_link"
                    href="/"
                    aria-label="EXELO - Logo"
                  >
                    <Image
                      width={192}
                      height={35}
                      className="light_theme_logo"
                      src="/assets/images/logo.svg"
                      alt="Logo - EXELO - Serwis Samochodowy"
                    />
                  </Link>
                </div>
                <p>
                  Nasz serwis samochodowy to gwarancja kompleksowej opieki nad
                  Twoim pojazdem.
                </p>
                <div className="footer_hotline">
                  <a className="hotline_number" href="tel:+48789781811">
                    +48 789 781 811
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="info_list_wrap">
                <h3 className="list_title">O nas</h3>
                <ul className="info_list unordered_list_block text-uppercase">
                  {Object.values(navLinks).map((el) => (
                    <li key={el.href}>
                      <Link href={el.href}>
                        <span className="info_text">{el.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info_list_wrap">
                <h3 className="list_title">Usługi</h3>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <ul className="info_list unordered_list_block text-uppercase">
                      {navLinks.services.children?.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href}>
                            <span className="info_text">{child.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3">
              <div className="footer_subscribe_form">
                <h3 className="list_title">Subscribe</h3>
                <div className="form-group">
                  <label htmlFor="input_email">Your Email</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    id="input_email"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <span className="btn_text">Subscribe</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
