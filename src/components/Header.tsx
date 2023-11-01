"use client";
import { navLinks } from "@/router/navLinks";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <header className="site_header">
      <div className="header_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-5">
              <div className="site_logo">
                <Link className="site_link" href="/" aria-label="EXELO - Logo">
                  <Image
                    className="dark_theme_logo"
                    width={192}
                    height={35}
                    // src="/assets/images/logo.svg"
                    src="/assets/images/logo.svg"
                    alt="Logo - EXELO - Serwis Samochodowy"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-center"
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list_center">
                    {/* <li className="dropdown active">
                      <a
                        className="nav-link"
                        href="#"
                        id="home_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        10+ Home
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="home_submenu"
                      >
                        <li className="active">
                          <a href="index.html">Repair Service</a>
                        </li>
                        <li>
                          <a href="home2_online_service.html">Online Service</a>
                        </li>
                        <li>
                          <a href="home3_tyres.html">Tyres Production</a>
                        </li>
                        <li>
                          <a href="home4_auto_shop.html">Auto Equipments</a>
                        </li>
                        <li>
                          <a href="home5_hire_expert.html">Hire Expert</a>
                        </li>
                        <li>
                          <a href="home6_rims_wheels.html">Rims & Wheels</a>
                        </li>
                        <li>
                          <a href="home7_master_service.html">Master Service</a>
                        </li>
                        <li>
                          <a href="home8_service_booking.html">
                            Service Booking
                          </a>
                        </li>
                        <li>
                          <a href="home9_wash_service.html">Wash Service</a>
                        </li>
                        <li>
                          <a href="home10_paint_service.html">Paint Service</a>
                        </li>
                      </ul>
                    </li> */}
                    {Object.values(navLinks).map((navEl) => (
                      <li className="dropdown" key={navEl.href}>
                        <Link
                          className="nav-link"
                          href={navEl.href}
                          role="button"
                          // data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {navEl.label}
                        </Link>
                        {navEl.children && (
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="service_submenu"
                          >
                            {navEl.children.map((child) => (
                              <li key={child.href}>
                                <Link href={child.href}>{child.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                    {/*
                    <li className="dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        id="shop_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Shop
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="shop_submenu"
                      >
                        <li>
                          <a href="shop.html">Our Shop</a>
                        </li>
                        <li>
                          <a href="shop_details.html">Shop Details</a>
                        </li>
                        <li className="dropdown">
                          <a
                            className="nav-link"
                            href="#"
                            id="deals_submenu"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Current Offers
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="deals_submenu"
                          >
                            <li>
                              <a href="deals.html">Our Deals</a>
                            </li>
                            <li>
                              <a href="deals_details.html">Deals Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="cart.html">Shopping Cart</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        id="pages_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="pages_submenu"
                      >
                        <li className="dropdown">
                          <a
                            className="nav-link"
                            href="#"
                            id="about_submenu"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            About
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="about_submenu"
                          >
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="portfolio.html">Our Portfolio</a>
                            </li>
                            <li>
                              <a href="team.html">Our Team</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing</a>
                        </li>
                        <li className="dropdown">
                          <a
                            className="nav-link"
                            href="#"
                            id="blog_submenu"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Blogs
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="blog_submenu"
                          >
                            <li>
                              <a href="blog.html">Blog Grid</a>
                            </li>
                            <li>
                              <a href="blog_2.html">Blog Standard</a>
                            </li>
                            <li>
                              <a href="blog_details.html">Blog Details V.1</a>
                            </li>
                            <li>
                              <a href="blog_details_2.html">Blog Details V.2</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="faq.html">F.A.Q.</a>
                        </li>
                        <li>
                          <a href="error.html">404 Error</a>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li>
                      <Link href={navLinks[3].href}>Kontakt</Link>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-3 col-5">
              <ul className="header_btns_group unordered_list_end">
                <li>
                  <button
                    className="mobile_menu_btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <svg
                      width="35px"
                      height="35px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7L7 7M20 7L11 7"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M20 17H17M4 17L13 17"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 12H7L20 12"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </li>

                <li>
                  <a className="btn_hotline" href="tel:+48789781811">
                    <span className="btn_text" data-text="+48 789 781 811">
                      +48 789 781 811
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
