import NotFound from "@/components/NotFound";
import EstimatePageSkeleton from "@/skeletons/EstimatePageSkeleton";

const getData = async (estimateId: string) => {
  const response = await fetch(
    `https://cms.exelo-warszowice.pl/api/estimate/${estimateId}?locale=undefined&draft=false&depth=1`
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
