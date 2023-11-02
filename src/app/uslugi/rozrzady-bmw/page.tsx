import PortfolioSection from "@/components/Sections/PortfolioSection";
import { navLinks } from "@/router/navLinks";
import ServicePageSkeleton from "@/skeletons/ServicePageSkeleton";
import { Metadata } from "next";

const RozrzadPage = () => {
  return (
    <>
      <ServicePageSkeleton
        data={{
          routeThree: [
            { href: "/", label: "Strona Główna" },
            { href: "/uslugi", label: "Usługi" },
            { href: "/uslugi/rozrzady-bmw", label: "Rozrząd BMW" },
          ],
          title: "Wymiana Rozrządu BMW",
          image: {
            href: "/assets/images/landing/cam.webp",
            alt: "EXELO - Wymiana Rozrządu BMW",
          },

          description: `
              Usługa wymiany rozrządu w samochodach marki BMW to kluczowy
              element dbania o sprawność i niezawodność Twojego pojazdu. Nasz
              doświadczony zespół mechaniczny zajmuje się precyzyjną wymianą
              rozrządu, gwarantując, że Twój BMW będzie działać z maksymalną
              efektywnością. Zaufaj nam, by cieszyć się długotrwałą jazdą z
              pełnym komfortem i pewnością działania.
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
            "Pamiętaj, że profesjonalny serwis klimatyzacji samochodowej jest kluczem do jej sprawności, trwałości i bezpieczeństwa. Jeśli masz dodatkowe pytania lub wątpliwości, zawsze warto skonsultować się z doświadczonym technikiem.",
          priceTable: [
            {
              title: "Przykładowy koszt wymiany rozrządu w silniku N57 RWD",
              items: [
                { label: "Łańcuch napędu pompy oleju", value: "111,57 zł" },
                { label: "Elementy wtryskiwacza", value: "30,32 zł" },
                { label: "Filtr oleju", value: "57,68 zł" },
                { label: "Uszczelka misy olejowej", value: "83,75 zł" },
                {
                  label: "Zestaw uszczelek pokrywy zaworów",
                  value: "87,66 zł",
                },
                { label: "Olej silnikowy 5L", value: "188,80 zł" },
                { label: "Olej silnikowy 1L", value: "89,02 zł" },
                {
                  label: "Rozrząd kompletny (koło - łańcuch)",
                  value: "1 689,00 zł",
                },
                { label: "Preparat do uszczelnienia", value: "27,37 zł" },
                { label: "USŁUGA", value: "2 000,00 zł" },
              ],
            },
            {
              title: "Przykładowy koszt serwisu w silniku N47 AWD",
              items: [
                {
                  label: "Łańcuch napedu pompy oleju",
                  value: "111,57 zł ",
                },
                {
                  label: "Elementy wtryskiwacza",
                  value: "30,32 zł ",
                },
                {
                  label: "Filtr oleju",
                  value: "57,68 zł ",
                },
                {
                  label: "Śruba mocowania koła zębatego wałka rozrządu",
                  value: "30,61 zł ",
                },
                {
                  label: "Zestaw Uszczelek, pokrywy zaworów",
                  value: "72,90 zł ",
                },
                {
                  label: "Olej silnikowy 5L",
                  value: "188,80 zł ",
                },
                {
                  label: "Olej silnikowy 1L",
                  value: "44,74 zł ",
                },
                {
                  label: "Rozrząd kpl. (koło - Łancuch)",
                  value: "1 689,00 zł ",
                },
                {
                  label: "Preparat do uszczelnienia",
                  value: "24,41 zł ",
                },
                {
                  label: "Usługa",
                  value: "2 200,50 zł ",
                },
              ],
            },
          ],
          faq: {
            title: "Najczęściej zadawane pytania",
            items: [
              {
                title: "Czy wymiana rozrządu jest kosztowna?",
                content:
                  "Koszty wymiany rozrządu różnią się w zależności od modelu BMW i lokalizacji. Jednak unikanie wymiany rozrządu może prowadzić do znacznie większych kosztów w przypadku uszkodzeń silnika, więc jest to inwestycja w trwałość pojazdu.",
              },
              {
                title: "Jakie są objawy uszkodzonego rozrządu?",
                content:
                  "Objawy uszkodzonego rozrządu mogą obejmować dziwne odgłosy z silnika, spadający poziom mocy, nierówną pracę silnika lub problemy z rozruchem. Jeśli zauważysz te symptomy, skonsultuj się z profesjonalnym serwisem.",
              },

              {
                title:
                  "Dlaczego powinienem wybrać profesjonalny serwis do wymiany rozrządu?",
                content:
                  "Wymiana rozrządu to skomplikowany proces, który wymaga precyzji i doświadczenia. Profesjonalny serwis zapewni, że prace zostaną przeprowadzone zgodnie z wytycznymi producenta, co przekłada się na trwałość i bezpieczeństwo pojazdu.",
              },

              {
                title: "Jak długo trwa wymiana rozrządu?",
                content:
                  "Czas wymiany rozrządu zależy od modelu BMW i stanu układu. Może to trwać od kilku godzin do całego dnia roboczego. Technik dokładnie oceni czas wymiany podczas diagnozy.",
              },

              {
                title:
                  "Czy mogę korzystać z nieoryginalnych części przy wymianie rozrządu?",
                content:
                  "Zalecamy stosowanie oryginalnych lub wysokiej jakości części zamiennych, ponieważ zapewniają one najwyższą jakość i trwałość. Nieoryginalne części mogą wpływać na sprawność i trwałość układu rozrządu.",
              },
              {
                title: "Czy otrzymam gwarancje na wymianę rozrządu?",
                content:
                  "Oczywiście, otrzymasz gwarancję na wymianę rozrządu w naszym serwisie. Nasz profesjonalny zespół mechaniczny dokłada wszelkich starań, aby zapewnić Ci usługę najwyższej jakości. Dlatego też oferujemy gwarancję na wykonane przez nas prace. Jeśli pojawią się jakiekolwiek problemy związane z wymianą rozrządu, jesteśmy gotowi je naprawić zgodnie z warunkami gwarancji. Twoje zadowolenie i bezpieczeństwo są dla nas priorytetem, dlatego możesz mieć pewność, że jesteś w dobrych rękach.",
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
  title: "Wymiana Rozrządów BMW | Profesjonalny Serwis EXELO",
  description:
    "Zadbaj o sprawność swojego BMW. Oferujemy profesjonalną usługę wymiany rozrządów. Długotrwałe i bezpieczne rozwiązania w warsztacie EXELO.",

  openGraph: {
    title: "Wymiana Rozrządów BMW | Profesjonalny Serwis EXELO",
    description:
      "Zadbaj o sprawność swojego BMW. Oferujemy profesjonalną usługę wymiany rozrządów. Długotrwałe i bezpieczne rozwiązania w warsztacie EXELO.",
    type: "website",
    url: "https://exelowarszowice.pl/usligi/rozrzady-bmw",
    // image: "https://www.example.com/images/bmw-rozrzad.jpg",
  },

  // twitter: {
  //   card: "summary_large_image",
  //   site: "@exelo_autoservice",
  //   title: "Wymiana Rozrządów BMW | Profesjonalny Serwis EXELO",
  //   description: "Zadbaj o sprawność swojego BMW. Oferujemy profesjonalną usługę wymiany rozrządów. Długotrwałe i bezpieczne rozwiązania w warsztacie EXELO.",
  //   image: "https://www.example.com/images/bmw-rozrzad.jpg",
  // }
};

export default RozrzadPage;
