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
            { href: "/uslugi/mechanika", label: "Mechanika" },
          ],
          title: "Mechanika",
          image: {
            href: "/assets/images/landing/mechanic.webp",
            alt: "EXELO - Mechanika",
          },

          description: `Nasza usługa mechaniki to pełen pakiet opieki nad Twoim samochodem. Oferujemy gwarancję na każdą przeprowadzoną naprawę, co daje Ci pewność, że jesteśmy odpowiedzialni za jakość naszych usług. Dodatkowo, zapewniamy bezpłatną diagnostykę, dzięki której dokładnie oceniamy stan Twojego pojazdu przed rozpoczęciem prac naprawczych.

	  Nasza firma stawia na stałą komunikację z klientem. Jesteśmy dostępni, by odpowiedzieć na Twoje pytania i dostarczyć Ci aktualne informacje o postępie prac. Dzięki temu masz pewność, że Twój samochód jest w najlepszych rękach. Zaufaj nam, by zadbać o każdy aspekt obsługi Twojego pojazdu i ciesz się spokojem na drodze.
	  `,

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
            "Jako mechanicy, jesteśmy gotowi podjąć każde wyzwanie, by zapewnić Ci pełen komfort jazdy. Nasza usługa mechanika to połączenie pasji i precyzji. Rozumiejąc, jak ważne jest Twoje auto, dbamy o nie z pełnym zaangażowaniem, zapewniając skuteczne naprawy i kompleksową obsługę.",

          faq: {
            title: "Najczęściej zadawane pytania",
            items: [
              {
                title: "Czy oferujecie gwarancję na wykonane naprawy?",
                content:
                  "Tak, oferujemy gwarancję na każdą przeprowadzoną naprawę. Nasza firma dba o jakość i niezawodność naszych usług, dlatego możesz być pewien, że jesteśmy odpowiedzialni za jakość naszych prac.",
              },
              {
                title:
                  "Czy przeprowadzacie bezpłatną diagnozę problemów z samochodem?",
                content:
                  "Tak, zapewniamy bezpłatną diagnostykę, która pozwala nam dokładnie ocenić stan Twojego pojazdu przed rozpoczęciem prac naprawczych. To pomaga nam zidentyfikować problemy i dostarczyć Ci rzetelną ocenę kosztów naprawy.",
              },
              {
                title:
                  "Jak mogę skontaktować się z waszą firmą w razie pytań lub potrzeby informacji o postępie prac?",
                content:
                  "Jesteśmy dostępni przez telefon, e-mail oraz osobiście w naszym warsztacie. Stawiamy na stałą komunikację z klientem, więc możesz skontaktować się z nami w dowolnym momencie, aby uzyskać odpowiedzi na swoje pytania i aktualne informacje o stanie naprawy.",
              },
              {
                title: "Jakie usługi mechaniczne oferujecie?",
                content:
                  "Nasza firma oferuje pełen zakres usług mechanicznych, w tym naprawy, przeglądy, wymianę części, serwis klimatyzacji, oraz wiele innych. Jesteśmy gotowi obsłużyć Twoje auto od podstawowej konserwacji po skomplikowane naprawy.",
              },
              {
                title: "Jak długo trwa przeciętna naprawa w waszym warsztacie?",
                content:
                  "Czas trwania naprawy zależy od rodzaju usługi i zakresu prac. Prosimy o kontakt, aby uzyskać szacunkowy czas naprawy dla Twojego konkretnego przypadku. Jesteśmy zawsze gotowi dostosować się do Twoich potrzeb.",
              },
              {
                title: "Jakie rodzaje samochodów obsługujecie?",
                content:
                  "Nasz warsztat obsługuje samochody różnych marek i modeli. Jesteśmy wykwalifikowani do napraw i konserwacji wszystkich typów pojazdów, co obejmuje także samochody osobowe, dostawcze, i wiele innych.",
              },
            ],
          },
          portfolio: {
            title: "Ostatnie serwisy",
            items: [
              {
                image: {
                  alt: "EXELO - Serwis",
                  src: "/assets/images/portfolio/cam/1.webp",
                },
              },
              {
                image: {
                  alt: "EXELO - Serwis",
                  src: "/assets/images/portfolio/cam/2.webp",
                },
              },
              {
                image: {
                  alt: "EXELO - Serwis",
                  src: "/assets/images/portfolio/cam/3.webp",
                },
              },
              {
                image: {
                  alt: "EXELO - Serwis",
                  src: "/assets/images/portfolio/cam/4.webp",
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
  title: "Usługa Mechanika | Profesjonalny Serwis Mechaniczny EXELO",
  description:
    "Nasza usługa mechanika to gwarancja fachowej obsługi i profesjonalnych napraw samochodów. Dbałość o szczegóły, dokładność i stała komunikacja z naszą firmą to nasze priorytety.",

  openGraph: {
    title: "Usługa Mechanika | Profesjonalny Serwis Mechaniczny EXELO",
    description:
      "Nasza usługa mechanika to gwarancja fachowej obsługi i profesjonalnych napraw samochodów. Dbałość o szczegóły, dokładność i stała komunikacja z naszą firmą to nasze priorytety.",
    type: "website",
    url: "https://exelowarszowice.pl/uslugi/mechanika",
    //   image: "https://www.example.com/images/mechanik.jpg",
  },

  // twitter: {
  //   card: "summary_large_image",
  //   site: "@exelo_autoservice",
  //   title: "Usługa Mechanika | Profesjonalny Serwis Mechaniczny EXELO",
  //   description: "Nasza usługa mechanika to gwarancja fachowej obsługi i profesjonalnych napraw samochodów. Dbałość o szczegóły, dokładność i stała komunikacja z naszą firmą to nasze priorytety.",
  //   image: "https://www.example.com/images/mechanik.jpg",
  // }
};

export default MechanikaPage;
