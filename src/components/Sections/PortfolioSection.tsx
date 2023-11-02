import Image from "next/image";

export type PortfolioSectionProps = {
  title: string;
  items: Array<{ image: { src: string; alt: string } }>;
};

const PortfolioSection = ({ items, title }: PortfolioSectionProps) => {
  return (
    <section className="portfolio_section section_space_sm">
      <div className="container">
        <div className="section_heading">
          <h2 className="heading_text wow mb-0" data-splitting>
            {title}
          </h2>
        </div>
        <div className="row">
          {items.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={item.image.src}>
              <div className="team_expert_item">
                <div className="team_expert_image">
                  <Image
                    width={620}
                    height={890}
                    src={item.image.src}
                    alt={item.image.alt}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
