import AsideContactSection from "@/components/Sections/AsideContactSection";
import ContactFormSection from "@/components/Sections/ContactFormSection";
import EstimateProcessSection from "@/components/estimate/EstimateProcessSection";
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
                {estimate.description_html && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: estimate.description_html,
                    }}
                  />
                )}
                <EstimateTable data={estimate.estimate} />
              </div>

              <div className="details_content">
                <i>
                  {/* <div className="details_info_title">UWAGA!</div> */}
                  Chcielibyśmy poinformować, że finalna cena naszych usług może
                  się różnić w zależności od ewentualnych zmian podczas prac
                  serwisowych. <br /> Zapewniamy pełną transparentność, a{" "}
                  <strong>każdą </strong>
                  modyfikację będziemy dokładnie omawiać z Państwem. Naszym
                  celem jest zachowanie satysfakcji i zaufania naszych Klientów.
                </i>
              </div>
              <EstimateProcessSection />
            </div>

            <div className="col-lg-4">
              <AsideContactSection hideScheduleService />
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
  const summary = data.reduce((acc, el) => acc + el.price, 0);
  return (
    <>
      <h3 className="details_info_title">Wycena</h3>
      <div className="service_type_price_table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Nazwa</th>
              {/* <th scope="col">Marka</th> */}
              <th scope="col">Cena</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el, index) => (
              <tr key={index}>
                <td scope="row">{el.name}</td>
                {/* <td>{el.make}</td> */}
                <td>{formatPrice(el.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="order_summary">RAZEM: {formatPrice(summary)}</div>
    </>
  );
};

export default EstimatePageSkeleton;
