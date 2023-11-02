"use client";
import { ReactNode, useEffect } from "react";

export type AccordionProps = {
  items: Array<{ title: ReactNode; content: ReactNode }>;
};

const Accordion = ({ items }: AccordionProps) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="accordion" id="faq_accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading-${index}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              {item.title}
            </button>
          </div>
          <div
            id={`collapse-${index}`}
            className="accordion-collapse collapse "
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#faq_accordion"
          >
            <div className="accordion-body pt-0">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
