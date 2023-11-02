import ServicePageSkeleton from "@/skeletons/ServicePageSkeleton";
import { Metadata } from "next";

const MechanikaPage = () => {
  return (
    <>
      <ServicePageSkeleton
        data={{
          routeThree: [
            { href: "/", label: "Strona Główna" },
            { href: "/uslugi", label: "Usługi" },
            {
              href: "/uslugi/ogrzewania-postojowe",
              label: "Ogrzewania Postojowe",
            },
          ],
          title: "Ogrzewania Postojowe",
          image: {
            href: "/assets/images/landing/heating.webp",
            alt: "EXELO - Ogrzewania Postojowe",
          },

          description: `Usługa serwisu i montażu ogrzewań postojowych to kluczowy element dbałości o komfort jazdy w zimowych warunkach. Nasz doświadczony zespół specjalistów jest gotów dostosować i naprawić ogrzewanie postojowe w Twoim pojeździe, zapewniając ciepło i wygodę podczas mroźnych dni. Oferujemy pełen zakres usług, włączając w to diagnostykę, montaż, naprawę oraz konserwację systemów grzewczych. Niezależnie od marki i modelu Twojego samochodu, gwarantujemy profesjonalizm i efektywne rozwiązania, które sprawią, że każda podróż w chłodniejsze dni będzie bardziej komfortowa.`,

          points: [
            "Gwarancja na każdą usługę",
            "Brak ukrytych kosztów",
            "Profesjonalna wymiana",
            "Dokładna wycena przed rozpoczęciem serwisu",
            "Dokumentacja zdjęciowa z naprawy",
            "Szybka obsługa",
            "Doświadczony zespół mechaniczny",
            "Konkurencyjne ceny",
            "Dbałość o szczegóły",
            "Zaufana firma w branży motoryzacyjnej",
          ],
          description2:
            "Montaż ogrzewań postojowych to nie tylko komfort, ale także oszczędność czasu i energii. Dzięki naszej usłudze, Twój samochód będzie gotowy do jazdy w warunkach niskich temperatur, bez konieczności długiego oczekiwania na rozmrożenie szyb i wnętrza pojazdu. Nasza firma oferuje także stałą opiekę i serwis dla systemów grzewczych, gwarantując ich niezawodność przez wiele sezonów. Z nami masz pewność, że zima nie będzie stanowiła problemu dla Twojego samochodu.",

          faq: {
            title: "Najczęściej zadawane pytania",
            items: [
              {
                title:
                  "1. Czy oferujecie montaż ogrzewań postojowych w różnych markach samochodów?",
                content:
                  "Tak, nasza firma specjalizuje się w montażu ogrzewań postojowych w różnych markach i modelach samochodów. Nasz zespół jest wykwalifikowany do dostosowania systemu grzewczego do Twojego pojazdu.",
              },
              {
                title:
                  "2. Czy oferujecie serwis i naprawę istniejących ogrzewań postojowych?",
                content:
                  "Tak, nasza usługa obejmuje zarówno montaż nowych ogrzewań postojowych, jak i serwis oraz naprawy istniejących systemów grzewczych. Dzięki temu zapewniamy kompleksową opiekę nad ogrzewaniem Twojego samochodu.",
              },
              {
                title:
                  "3. Jak mogę umówić się na montaż lub serwis ogrzewań postojowych?",
                content:
                  "Aby umówić się na montaż lub serwis ogrzewań postojowych, skontaktuj się z nami telefonicznie lub przez e-mail. Nasz zespół dostosuje termin do Twoich potrzeb i dokładnie oceni, jakie usługi są wymagane.",
              },
              {
                title:
                  "4. Czy oferujecie gwarancję na montaż i serwis ogrzewań postojowych?",
                content:
                  "Tak, gwarantujemy jakość naszych usług i oferujemy gwarancję na montaż oraz serwis ogrzewań postojowych. Dzięki temu możesz mieć pewność, że jesteś objęty naszą opieką.",
              },
              {
                title:
                  "5. Jakie korzyści przynosi montaż ogrzewania postojowego do samochodu?",
                content:
                  "Montaż ogrzewania postojowego pozwala na szybkie rozmrożenie szyb i wnętrza pojazdu oraz zapewnia ciepło podczas jazdy w chłodniejszych warunkach. To oszczędność czasu i komfort podczas zimowych podróży.",
              },
            ],
          },
          portfolio: {
            title: "Ostatnie serwisy",
            items: [
              {
                image: {
                  src: "/assets/images/portfolio/heating/1.webp",
                  alt: "Ogrzewanie postojowe - EXELO",
                },
              },
              {
                image: {
                  src: "/assets/images/portfolio/heating/2.webp",
                  alt: "Ogrzewanie postojowe - EXELO",
                },
              },
              {
                image: {
                  src: "/assets/images/portfolio/heating/3.webp",
                  alt: "Ogrzewanie postojowe - EXELO",
                },
              },
              {
                image: {
                  src: "/assets/images/portfolio/heating/4.webp",
                  alt: "Ogrzewanie postojowe - EXELO",
                },
              },
            ],
          },
        }}
      />
    </>
  );
};

export const metadata: Metadata = {
  title:
    "Serwis i Montaż Ogrzewań Postojowych | Profesjonalna Usługa w Serwisie Samochodowym EXELO",
  description:
    "Nasza usługa serwisu i montażu ogrzewań postojowych to klucz do komfortu i wygody podczas zimowych podróży. Oferujemy montaż, serwis oraz naprawy ogrzewań postojowych w różnych markach samochodów. Dowiedz się więcej o naszych usługach.",

  openGraph: {
    title:
      "Serwis i Montaż Ogrzewań Postojowych | Profesjonalna Usługa w Serwisie Samochodowym EXELO",
    description:
      "Nasza usługa serwisu i montażu ogrzewań postojowych to klucz do komfortu i wygody podczas zimowych podróży. Oferujemy montaż, serwis oraz naprawy ogrzewań postojowych w różnych markach samochodów. Dowiedz się więcej o naszych usługach.",
    type: "website",
    url: "https://exelowarszowice.pl/uslugi/ogrzewania-postojowe",
    // image: "https://exelowarszowice.pl/images/ogrzewanie-postojowe.jpg",
  },

  // twitter: {
  //   card: "summary_large_image",
  //   site: "@exelo_autoservice",
  //   title: "Serwis i Montaż Ogrzewań Postojowych | Profesjonalna Usługa w Serwisie Samochodowym EXELO",
  //   description: "Nasza usługa serwisu i montażu ogrzewań postojowych to klucz do komfortu i wygody podczas zimowych podróży. Oferujemy montaż, serwis oraz naprawy ogrzewań postojowych w różnych markach samochodów. Dowiedz się więcej o naszych usługach.",
  //   image: "https://exelowarszowice.pl/images/ogrzewanie-postojowe.jpg",
  // }
};

export default MechanikaPage;
