import NotFound from "@/components/NotFound";
import EstimatePageSkeleton from "@/skeletons/EstimatePageSkeleton";
import { buildCMSUrl } from "@/utils/buildCMSUrl";
import { Metadata } from "next";

const getData = async (estimateId: string) => {
  const response = await fetch(
    buildCMSUrl(
      `/api/estimate/${estimateId}?locale=undefined&draft=false&depth=1`
    ),
    { cache: "no-store" }
  );

  const data = await response.json();

  if (data.errors) {
    return null;
  }

  return data;
};

const EstimatePage = async ({
  params: { estimateId },
}: {
  params: { estimateId: string };
}) => {
  const data = await getData(estimateId);

  if (!data) {
    return (
      <div className="container section_space_lg">
        <NotFound />
      </div>
    );
  }
  return <EstimatePageSkeleton estimate={data} />;
};

export default EstimatePage;

export const metadata: Metadata = {
  title: "Wycena Usługi | Serwis Samochodowy EXELO",
  description:
    "Zaplanuj koszty serwisu swojego samochodu. Oferujemy wycenę usług mechanicznych, elektrycznych, klimatyzacji, wymiany rozrządów i innych. Sprawdź, ile może kosztować naprawa lub serwis Twojego pojazdu.",
  openGraph: {
    title: "Wycena Usługi | Serwis Samochodowy EXELO",
    description:
      "Zaplanuj koszty serwisu swojego samochodu. Oferujemy wycenę usług mechanicznych, elektrycznych, klimatyzacji, wymiany rozrządów i innych. Sprawdź, ile może kosztować naprawa lub serwis Twojego pojazdu.",
    type: "website",
    url: "https://www.example.com/wycena-uslug",
    // image: "https://www.example.com/images/wycena.jpg",
  },
};
