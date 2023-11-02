import ServiceDetailsSection from "@/components/Sections/ServiceDetailsSection";
import { Metadata } from "next";
import Link from "next/link";

const UslugiPage = () => {
  return (
    <>
      <main className="page_content">
        <section
          className="page_banner"
          style={{
            backgroundImage: `url("/assets/images/shapes/tyre_print_3.svg")`,
          }}
        >
          <div className="container">
            <ul className="breadcrumb_nav unordered_list">
              <li>
                <Link href="/">Strona Główna</Link>
              </li>
              <li>
                <Link href="/">Usługi</Link>
              </li>
            </ul>
            <h1 className="page_title wow" data-splitting>
              Usługi
            </h1>
          </div>
        </section>

        <ServiceDetailsSection />
      </main>
    </>
  );
};

export const metadata: Metadata = {
  title: "Nasze Usługi | Serwis Samochodowy EXELO",
  description:
    "Zapoznaj się z naszym szerokim zakresem usług samochodowych, w tym mechaniką, elektryką, klimatyzacją, wymianą rozrządów i wiele innych. Jesteśmy profesjonalnym serwisem, który zadba o Twój pojazd.",

  openGraph: {
    title: "Nasze Usługi | Serwis Samochodowy EXELO",
    description:
      "Zapoznaj się z naszym szerokim zakresem usług samochodowych, w tym mechaniką, elektryką, klimatyzacją, wymianą rozrządów i wiele innych. Jesteśmy profesjonalnym serwisem, który zadba o Twój pojazd.",
    type: "website",
    url: "https://exelo-warszowice.pl/uslugi",
  },
};
export default UslugiPage;
