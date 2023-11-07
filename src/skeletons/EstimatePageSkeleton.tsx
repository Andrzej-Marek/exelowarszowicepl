import AsideContactSection from "@/components/Sections/AsideContactSection";
import ContactFormSection from "@/components/Sections/ContactFormSection";

import { Estimate, formatDrive, formatSteering } from "@/types/estimate";
import { formatPrice } from "@/utils/formatPrice";

type ServicePageSkeletonProps = {
  estimate: Estimate;
};

const EstimatePageSkeleton = ({ estimate }: ServicePageSkeletonProps) => {
  return (
    <main className="page_content">
      <section
        className="hero_section hero_section_2 bg_gray_dark"
        style={{
          backgroundImage: `url("/assets/images/shapes/tyre_print_3.svg")`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero_section_content">
                <h1 className="hero_title wow" data-splitting>
                  {estimate.title}
                </h1>
                <h2>VIN: {estimate.vinNo}</h2>
                <ul className="policy_small unordered_list">
                  <li>
                    <span className="d-block">{estimate.brand}</span>{" "}
                    {estimate.model}
                  </li>
                  <li>
                    <span className="d-block">{estimate.engine}</span>{" "}
                    {estimate.engineDetails}
                  </li>
                  <li>
                    <span className="d-block">
                      {formatDrive(estimate.drive)}
                    </span>{" "}
                    {formatSteering(estimate.steering)}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </section>

      <section className="details_section section_space_sm pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="details_content">
                <div>{estimate.description}</div>
                <EstimateTable data={estimate.estimate} />
                <h4>RAZEM: {formatPrice(estimate.total)}</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <AsideContactSection />
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection
        backText="Masz pytania?"
        title="Skontaktuj się z nami"
        description="Jesteśmy tu po to, aby Ci pomóc. Dlatego na wszelkie pytania odpowiadamy jak najszybciej to możliwe."
      />
    </main>
  );
};

const EstimateTable = ({ data }: { data: Estimate["estimate"] }) => {
  return (
    <>
      <h3 className="details_info_title">Wycena</h3>
      <div className="service_type_price_table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Nazwa</th>
              <th scope="col">Marka</th>
              <th scope="col">Cena</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el, index) => (
              <tr key={index}>
                <td scope="row">{el.name}</td>
                <td>{el.make}</td>
                <td>{formatPrice(el.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EstimatePageSkeleton;
