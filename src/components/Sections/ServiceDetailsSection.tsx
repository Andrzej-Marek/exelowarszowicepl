import Image from "next/image";

type ServiceDetailsSectionProps = {};

const services = [
  {
    backText: "Mechanika",
    image: {
      url: "/assets/images/landing/mechanic.webp",
      alt: "EXELO - Service Image",
    },

    title: "Mechanika pojazdowa",
    description:
      "Nasza usługa mechaniki samochodowej to gwarancja, że Twój pojazd będzie działać sprawnie i bezpiecznie.",
    buttonText: "Sprawdź",
    href: "/uslugi/mechanika",
  },
  {
    backText: "BMW",
    image: {
      url: "/assets/images/landing/cam.webp",
      alt: "EXELO - Service Image",
    },
    title: "Wymiana rozrządów BMW",
    description:
      " Wykonujemy kompleksową wymianę rozrządów w samochodach marki BMW, zapewniając doskonałą wydajność i niezawodność Twojego pojazdu.",
    buttonText: "Sprawdź",
    href: "/uslugi/rozrzady-bmw",
  },
  {
    image: {
      url: "/assets/images/landing/ac.webp",
      alt: "EXELO - Service Image",
    },
    backText: "Chłód",
    title: "Klimatyzacja",
    description:
      "Serwisujemy, naprawiamy i montujemy, układy klimatyzacji w większości typach pojazdów.",
    buttonText: "Sprawdź",
    href: "/uslugi/klimatyzacja",
  },
  {
    image: {
      url: "/assets/images/landing/electric.webp",
      alt: "EXELO - Service Image",
    },
    backText: "Sprawnie",
    title: "Elektryka",
    description:
      "Nasze usługi elektryki samochodowej to klucz do utrzymania bezpiecznych i sprawnych układów elektrycznych w Twoim aucie.",
    buttonText: "Sprawdź",
    href: "/uslugi/elektryka",
  },
  {
    image: {
      url: "/assets/images/landing/heating.webp",
      alt: "EXELO - Service Image",
    },
    backText: "Ciepło",
    title: "Ogrzewania Postojowe",
    description:
      "Zainstalujemy i serwisujemy efektywne ogrzewanie postojowe, zapewniając Ci ciepło i wygodę w zimowe dni.",
    buttonText: "Sprawdź",
    href: "/uslugi/ogrzewania-postojowe",
  },
];
const ServiceDetailsSection = ({}: ServiceDetailsSectionProps) => {
  return (
    <section className="service_section bg_gray_dark" id="services">
      <div className="service_split_wrapper">
        {services.map((service) => (
          <div className="service_split_item" key={service.title}>
            <div className="item_image">
              <Image
                src={service.image?.url}
                alt={service.image?.url}
                className="service-image"
                width={1920}
                height={1220}
              />
            </div>
            <div className="item_content">
              <div className="section_heading">
                <div className="outline_text">{service.backText}</div>
                <h3 className="heading_text wow" data-splitting>
                  {service.title}
                </h3>
                <p className="heading_description mb-0">
                  {service.description}
                </p>
              </div>
              <a className="btn btn-primary" href={service.href}>
                <span className="btn_text">{service.buttonText}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
