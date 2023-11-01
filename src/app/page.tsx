import ContactDetailsSection from "@/components/Sections/ContactDetailsSection";
import CounterSection from "@/components/Sections/CounterSection";
import ServiceDetailsSection from "@/components/Sections/ServiceDetailsSection";
import WorkProcessSection from "@/components/Sections/WorkProcessSection";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("@/components/Hero"));

export default function Home() {
  return (
    <main className="page_content">
      <DynamicHero />
      <CounterSection />
      {/* <ServiceSection /> */}
      <ServiceDetailsSection />
      <WorkProcessSection />
      <ContactDetailsSection />
      {/* <ContactFormSection /> */}
    </main>
  );
}

export const metadata: Metadata = {
  title:
    "EXELO - Profesjonalny Warsztat Samochodowy | Naprawa Mechaniczna i Elektryka",
  description:
    "EXELO to specjalistyczny warsztat samochodowy oferujący usługi naprawy mechanicznej i elektryki samochodowej. Doświadczeni mechanicy dbają o Twój pojazd. Zaufaj nam!",
  openGraph: {
    title:
      "EXELO - Profesjonalny Warsztat Samochodowy | Naprawa Mechaniczna i Elektryka",
    description:
      "EXELO to specjalistyczny warsztat samochodowy oferujący usługi naprawy mechanicznej i elektryki samochodowej. Doświadczeni mechanicy dbają o Twój pojazd. Zaufaj nam!",
    type: "website",
    url: "https://www.exelowarszowice.pl",
    images: [],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@exelo_autoservice",
  //   title:
  //     "EXELO - Profesjonalny Warsztat Samochodowy | Naprawa Mechaniczna i Elektryka",
  //   description:
  //     "EXELO to specjalistyczny warsztat samochodowy oferujący usługi naprawy mechanicznej i elektryki samochodowej. Doświadczeni mechanicy dbają o Twój pojazd. Zaufaj nam!",
  //   images: [],
  // },
};
