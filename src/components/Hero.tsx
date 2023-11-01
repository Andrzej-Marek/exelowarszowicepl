import Image from "next/image";
import Link from "next/link";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
  return (
    <section className="hero_section hero_section_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero_section_content">
              <h1 className="hero_title wow" data-splitting>
                Serwis Samochodowy
              </h1>
              <p>
                <b>Witaj w EXELO</b> - Twoim zaufanym partnerze w sprawach
                napraw samochodowych! <br />
              </p>
              <Link href={"#services"}>
                <button className="btn btn-primary">
                  <span className="btn_text">Sprawdź</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="hero_section_image">
              <Image
                width={850}
                height={530}
                data-parallax='{"scale" : 0.6, "smoothness": 8}'
                src="/assets/images/hero.webp"
                alt="EXELO – Car Service Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="outline_text"
        data-parallax='{"x" : -200, "smoothness": 8}'
      >
        EXELO
      </div>
    </section>
  );
};

export default Hero;
