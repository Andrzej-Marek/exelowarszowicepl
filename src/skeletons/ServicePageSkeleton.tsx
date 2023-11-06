import Accordion, { AccordionProps } from "@/components/Accordion";
import AsideContactSection from "@/components/Sections/AsideContactSection";
import ContactFormSection from "@/components/Sections/ContactFormSection";
import PortfolioSection, {
  PortfolioSectionProps,
} from "@/components/Sections/PortfolioSection";
import WorkProcessSection from "@/components/Sections/WorkProcessSection";
import { splitToNChunks } from "@/utils/splitToNChunks";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type PriceTable = {
  title: string;
  splitIntoChunks?: boolean;
  items: Array<{ label: string; value: string }>;
};

type Faq = {
  title: string;
  items: AccordionProps["items"];
};

type PageData = {
  routeThree: Array<{ label: string; href: string }>;
  title: string;
  image: {
    href: string;
    alt: string;
  };
  faq?: Faq;
  description: ReactNode;

  points?: string[];
  priceTable?: PriceTable | PriceTable[];
  description2?: ReactNode;
  portfolio?: PortfolioSectionProps;
};

type ServicePageSkeletonProps = {
  data: PageData;
};

const ServicePageSkeleton = ({ data }: ServicePageSkeletonProps) => {
  return (
    <main className="page_content">
      <section
        className="page_banner"
        style={{
          backgroundImage: `url("/assets/images/shapes/tyre_print_3.svg")`,
        }}
      >
        <div className="container">
          <ul className="breadcrumb_nav unordered_list">
            {data.routeThree.map((threeEl) => (
              <li key={threeEl.href}>
                <Link href={threeEl.href}>{threeEl.label}</Link>
              </li>
            ))}
          </ul>
          <h1 className="page_title wow" data-splitting>
            {data.title}
          </h1>
        </div>
      </section>

      <section className="details_section section_space_lg pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="details_image">
                <Image
                  quality={70}
                  className="service-image"
                  width={1786}
                  height={778}
                  src={data.image.href}
                  alt={data.image.alt}
                />
              </div>
              <div className="details_content">
                <div>{data.description}</div>
                {!!data.points && <DescriptionPoints points={data.points} />}
                {!!data.priceTable &&
                  Array.isArray(data.priceTable) &&
                  data.priceTable.map((table, index) => (
                    <PriceTable key={index} data={table} />
                  ))}
                {!!data.priceTable && !Array.isArray(data.priceTable) && (
                  <PriceTable data={data.priceTable} />
                )}

                {!!data.description2 && (
                  <p className="mb-0">{data.description2}</p>
                )}
              </div>
              {!!data.faq && <CollapseSection faq={data.faq} />}
            </div>
            <div className="col-lg-4">
              <AsideContactSection />
            </div>
          </div>
        </div>
        {data.portfolio && <PortfolioSection {...data.portfolio} />}
      </section>

      <ContactFormSection
        backText="Masz pytania?"
        title="Skontaktuj się z nami"
        description=" Jesteśmy tu po to, aby Ci pomóc. Dlatego na wszelkie pytania odpowiadamy jak najszybciej to możliwe."
      />
    </main>
  );
};

const CollapseSection = ({ faq }: { faq: Faq }) => {
  return (
    <div className="section_space_sm pb-0">
      <div className="section_heading">
        <h3 className="heading_text wow" data-splitting>
          {faq.title}
        </h3>
      </div>
      <Accordion items={faq.items} />
    </div>
  );
};

const DescriptionPoints = ({ points }: { points: string[] }) => {
  const chunks = splitToNChunks(points, 2);

  return (
    <div className="row mb-5">
      <ul className="element-list text-uppercase info_list unordered_list_block">
        {points.map((point, index) => (
          <li key={index}>
            <span className="info_icon ">
              <Image
                src="/assets/images/icons/icon_square.svg"
                alt="ProMotors - Icon Square"
                width={9}
                height={9}
              />
            </span>
            <span className="info_text">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div className="row mb-5">
        {chunks.map((chunk, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <ul
              className="info_list unordered_list_block text-uppercase"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {chunk.map((el, index) => (
                <li key={index}>
                  <span className="info_icon">
                    <img
                      src="/assets/images/icons/icon_square.svg"
                      alt="ProMotors - Icon Square"
                    />
                  </span>
                  <span className="info_text">{el}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

const PriceTable = ({ data }: { data: PriceTable }) => {
  const chunks = data.splitIntoChunks
    ? splitToNChunks(data.items, 2)
    : [data.items];
  return (
    <>
      <h3 className="details_info_title">{data.title}</h3>
      <div className="service_type_price_table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Nazwa</th>
              <th scope="col">Cena</th>
            </tr>
          </thead>
          <tbody>
            {chunks[0]?.map((el, index) => (
              <tr key={index}>
                <th scope="row">{el.label}</th>
                <td>{el.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!!chunks[1] && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Nazwa</th>
                <th scope="col">Cena</th>
              </tr>
            </thead>
            <tbody>
              {chunks[1]?.map((el, index) => (
                <tr key={index}>
                  <th scope="row">{el.label}</th>
                  <td>{el.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ServicePageSkeleton;
