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
            { href: "/uslugi/elektryka", label: "Elektryka" },
          ],
          title: "Elektryka",
          image: {
            href: "/assets/images/landing/electric.webp",
            alt: "EXELO - Elektryka",
          },

          description: `Usługa Elektryki Samochodowej w naszym serwisie to profesjonalna diagnoza i naprawa systemów elektrycznych w Twoim pojeździe. Nasz wykwalifikowany personel jest gotowy rozwiązać wszelkie problemy z układem elektrycznym, dbając o bezpieczeństwo i niezawodność Twojego samochodu. Oferujemy kompleksową obsługę, gwarantując skuteczne rozwiązania i stałą opiekę nad Twoim pojazdem.`,

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
            "Usługa elektryki samochodowej to kluczowy element dbałości o sprawność i bezpieczeństwo Twojego pojazdu. Nasz zespół specjalistów w dziedzinie elektryki samochodowej jest gotów sprostać wszelkim wyzwaniom. Oferujemy kompleksową diagnozę oraz naprawy układów elektrycznych, a także instalację dodatkowych elementów, takich jak systemy audio, nawigacje, czy oświetlenie. Jako profesjonalny serwis samochodowy, stawiamy na innowacyjne rozwiązania, aby zapewnić Ci najwyższą jakość obsługi elektrycznych aspektów Twojego pojazdu.",

          faq: {
            title: "Najczęściej zadawane pytania",
            items: [
              {
                title:
                  "1. Czy oferujecie diagnozę i naprawę układów elektrycznych w samochodach?",
                content:
                  "Tak, nasza usługa elektryki samochodowej obejmuje kompleksową diagnozę i naprawę układów elektrycznych w pojazdach. Nasi specjaliści są wykwalifikowani do rozwiązywania wszelkich problemów z elektryką samochodową.",
              },
              {
                title:
                  "2. Czy zajmujecie się również instalacją dodatkowych elementów elektrycznych, takich jak systemy audio czy nawigacje?",
                content:
                  "Tak, oferujemy usługę instalacji dodatkowych elementów elektrycznych, w tym systemów audio, nawigacji, oświetlenia itp. Nasz zespół jest doświadczony w montażu różnorodnych akcesoriów w samochodach.",
              },
              {
                title:
                  "3. Jakie marki i modele samochodów obsługujecie w ramach usługi elektryki samochodowej?",
                content:
                  "Nasz serwis elektryki samochodowej obsługuje samochody różnych marek i modeli. Jesteśmy wyposażeni w odpowiednią wiedzę i sprzęt do pracy z różnymi rodzajami pojazdów.",
              },
              {
                title:
                  "4. Czy oferujecie gwarancję na przeprowadzone naprawy elektryczne?",
                content:
                  "Tak, gwarantujemy jakość naszych prac w zakresie elektryki samochodowej. Oferujemy gwarancję na wykonane naprawy, co daje klientom pewność, że są objęci naszą opieką.",
              },
              {
                title:
                  "5. Jak mogę umówić się na usługę elektryki samochodowej?",
                content:
                  "Aby umówić się na usługę elektryki samochodowej, skontaktuj się z nami telefonicznie lub przez e-mail. Nasz zespół postara się dostosować termin do Twoich potrzeb.",
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
