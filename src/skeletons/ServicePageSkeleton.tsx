import Accordion, { AccordionProps } from "@/components/Accordion";
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
                  className="service-image"
                  width={1786}
                  height={778}
                  src={data.image.href}
                  alt={data.image.alt}
                />
              </div>
              <div className="details_content">
                <p>{data.description}</p>
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
              <Aside />
            </div>
          </div>
        </div>
      </section>
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
    <>
      <div className="row mb-5">
        {chunks.map((chunk, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <ul className="info_list unordered_list_block text-uppercase">
              {chunk.map((el, index) => (
                <li key={index}>
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

const Aside = () => (
  <aside className="sidebar ps-lg-4">
    <div className="widget bg_gray_dark">
      <h3 className="widget_title">Umów się na serwis</h3>
      <p>Skontaktuj się z nami, w celu umówienia terminu.</p>
      <a className="btn btn-primary w-100" href="pricing.html">
        <span className="btn_text">Umów się</span>
      </a>
    </div>
    <div className="widget contact_info_box">
      <h3 className="widget_title">Kontakt</h3>
      <ul className="info_list unordered_list_block">
        <li>
          <span className="info_text mb-3">
            <span className="d-block">
              <a href="tel:+48789781811">+48 789 781 811</a>
            </span>
          </span>
        </li>
        <li>
          <span className="info_text">
            <span className="d-block">
              <a href="mailto:firma.exelo@gmail.com">firma.exelo@gmail.com</a>
            </span>
          </span>
        </li>
      </ul>
    </div>
    <div className="widget contact_info_box">
      <h3 className="widget_title">Lokalizacja</h3>
      <ul className="info_list unordered_list_block pe-lg-2">
        <li>
          <span className="info_text mb-3">
            EXELO s.c. <br />
            ul. Pszczyńska 116 <br />
            43-254 Warszowice
          </span>
        </li>
        <li>
          <span className="info_text">NIP: 6381835784</span>
        </li>
      </ul>
    </div>
    <div className="widget contact_info_box">
      <h3 className="widget_title">Godziny Otwarcia</h3>
      <ul className="info_list unordered_list_block">
        <li>
          <span className="info_text d-flex align-items-center justify-content-between">
            <span>Poniedziałek - Piątek</span>
            <span>07:00 - 15:00</span>
          </span>
        </li>
        <li>
          <span className="info_text d-flex align-items-center justify-content-between">
            <span>Sobota</span>
            <span>Niedzynne</span>
          </span>
        </li>
        <li>
          <span className="info_text d-flex align-items-center justify-content-between">
            <span>Niedziela</span>
            <span>Niedzynne</span>
          </span>
        </li>
      </ul>
    </div>
  </aside>
);

export default ServicePageSkeleton;
