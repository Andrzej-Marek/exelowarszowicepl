import ServicePageSkeleton from "@/skeletons/ServicePageSkeleton";
import { Metadata } from "next";

const KlimatyzacjaPage = () => {
  return (
    <ServicePageSkeleton
      data={{
        routeThree: [
          { href: "/", label: "Strona Główna" },
          { href: "/uslugi", label: "Usługi" },
          { href: "/uslugi/klimatyzacja", label: "Klimatyzacja" },
        ],
        title: "Klimatyzacja",
        image: {
          href: "/assets/images/landing/ac.webp",
          alt: "EXELO - Serwis Klimatyzacji",
        },
        description:
          "Usługa serwisu klimatyzacji to klucz do utrzymania komfortowej jazdy przez cały rok. Nasi doświadczeni specjaliści zapewnią, że klimatyzacja w Twoim samochodzie działa sprawnie i efektywnie, zapewniając Ci przyjemne warunki podczas upalnych dni oraz optymalne odparowanie szyb w zimie. Skorzystaj z naszych usług, by cieszyć się idealnym klimatem w swoim aucie, niezależnie od pogody.",

        description2:
          "Pamiętaj, że profesjonalny serwis klimatyzacji samochodowej jest kluczem do jej sprawności, trwałości i bezpieczeństwa. Jeśli masz dodatkowe pytania lub wątpliwości, zawsze warto skonsultować się z doświadczonym technikiem.",
        priceTable: [
          {
            title: "Przykładowy koszt przeglądu klimatyzacji",
            items: [
              { label: "Uzupełnienie czynnika r134a do 300g", value: "140 zł" },
              { label: "Ozonowanie układu", value: "30 zł" },
            ],
          },
          {
            title: "Przykładowy koszt serwisu klimatyzacji",
            items: [
              { label: "Uzupełnienie czynnika r134a do 300g", value: "140 zł" },
              { label: "Test szczelności", value: "70 zł" },
              { label: "Uszczelnienie układu", value: "150 zł" },
              { label: "Ozonowanie układu", value: "GRATIS przy serwisie" },
            ],
          },
        ],
        faq: {
          title: "Najczęściej zadawane pytania",
          items: [
            {
              title: "Jak często nalezy serwisować klimatyzację?",
              content: "sdsds",
            },
            {
              title: "Dlaczego moja klimatyzacja w samochodzie działa słabo?",
              content:
                "Słaba wydajność klimatyzacji może być spowodowana różnymi czynnikami, takimi jak wycieki czynnika chłodniczego, zanieczyszczenia w układzie, lub uszkodzone elementy. Konieczne jest dokładne zdiagnozowanie problemu przez profesjonalistę.",
            },

            {
              title: "Jak często należy serwisować klimatyzację w samochodzie?",

              content:
                "Zalecane jest serwisowanie klimatyzacji co około 2 lata lub co 30 000 km. Regularne przeglądy pomagają w zapobieganiu ewentualnym awariom i utrzymaniu jej sprawności.",
            },

            {
              title:
                "Czy samodzielnie mogę dodać czynnik chłodniczy do klimatyzacji?",

              content:
                "Nie zalecamy prób samodzielnego dolewanie czynnika chłodniczego. Tylko wykwalifikowany technik może to zrobić właściwie, a niewłaściwe uzupełnienie czynnika może uszkodzić układ.",
            },

            {
              title:
                "Dlaczego klimatyzacja w moim samochodzie pachnie nieprzyjemnie?",

              content:
                "Nieprzyjemne zapachy mogą być spowodowane rozwojem pleśni i bakterii w układzie klimatyzacji. Konieczne jest oczyszczenie układu, aby pozbyć się nieprzyjemnych woni.",
            },

            {
              title: "Jakie są typowe objawy awarii klimatyzacji?",

              content:
                "Typowe objawy awarii to słaba wydajność, gorące powietrze z nawiewu, dziwne odgłosy, wycieki lub nieprzyjemne zapachy. Jeśli zauważysz te problemy, skonsultuj się z profesjonalnym serwisem.",
            },

            {
              title: "Czy serwis klimatyzacji jest kosztowny?",

              content:
                "Koszty serwisu klimatyzacji różnią się w zależności od potrzeb i problemów. Jednak regularne serwisowanie jest znacznie tańsze niż naprawy awarii wynikające z zaniedbania.",
            },
          ],
        },
      }}
    />
  );
};

export const metadata: Metadata = {
  title: "Serwis Klimatyzacji Samochodowej | Profesjonalny Warsztat EXELO",
  description:
    "Zadbaj o komfort w swoim samochodzie. Oferujemy kompleksowy serwis klimatyzacji samochodowej. Profesjonalna obsługa i efektywna naprawa w warsztacie EXELO.",

  openGraph: {
    title: "Serwis Klimatyzacji Samochodowej | Profesjonalny Warsztat EXELO",
    description:
      "Zadbaj o komfort w swoim samochodzie. Oferujemy kompleksowy serwis klimatyzacji samochodowej. Profesjonalna obsługa i efektywna naprawa w warsztacie EXELO.",
    type: "website",
    url: "https://exelowarszowice.pl/uslugi/klimatyzacja",
    //   image: "https://www.exelowarszowice.pl/images/klimatyzacja.jpg",
  },

  // twitter: {
  //   card: "summary_large_image",
  //   site: "@exelo_autoservice",
  //   title: "Serwis Klimatyzacji Samochodowej | Profesjonalny Warsztat EXELO",
  //   description: "Zadbaj o komfort w swoim samochodzie. Oferujemy kompleksowy serwis klimatyzacji samochodowej. Profesjonalna obsługa i efektywna naprawa w warsztacie EXELO.",
  //   image: "https://www.exelowarszowice.pl/images/klimatyzacja.jpg",
  // }
};

export default KlimatyzacjaPage;
