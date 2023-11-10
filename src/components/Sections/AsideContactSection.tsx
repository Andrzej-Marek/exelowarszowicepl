"use client";

import { Pixel } from "@/lib/pixel";
import { useState } from "react";

type AsideContactSectionProps = {
  hideScheduleService?: boolean;
};

const AsideContactSection = ({
  hideScheduleService,
}: AsideContactSectionProps) => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  return (
    <aside className="sidebar ps-lg-4">
      {!hideScheduleService && (
        <div className="widget bg_gray_dark">
          <h3 className="widget_title">Umów się na serwis</h3>
          <p>Skontaktuj się z nami, w celu umówienia terminu.</p>
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              Pixel.phoneNumberClick();
              setShowPhoneNumber(true);
            }}
          >
            <span className="btn_text">
              {showPhoneNumber ? "+48 789 781 811" : "Umów się"}
            </span>
          </button>
        </div>
      )}
      <div className="widget contact_info_box">
        <h3 className="widget_title">Kontakt</h3>
        <ul className="info_list unordered_list_block">
          <li onClick={Pixel.phoneNumberClick}>
            <span className="info_text mb-3">
              <span className="d-block">
                <a href="tel:+48789781811">+48 789 781 811</a>
              </span>
            </span>
          </li>
          <li onClick={Pixel.emailClick}>
            <span className="info_text">
              <span className="d-block">
                <a href="mailto:firma.exelo@gmail.com">firma.exelo@gmail.com</a>
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div
        className="widget contact_info_box"
        onClick={Pixel.localizationClick}
      >
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
      <div
        className="widget contact_info_box"
        onClick={Pixel.openingHoursClick}
      >
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
};

export default AsideContactSection;
