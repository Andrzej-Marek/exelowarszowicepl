type LinkChildren = {
  label: string;
  href: string;
};

type Link = {
  label: string;
  href: string;
  children?: LinkChildren[];
};

export const navLinks: Record<
  "home" | "services" | "howItsWorks" | "contact",
  Link
> = {
  home: {
    label: "Strona główna",
    href: "/",
  },
  services: {
    label: "Usługi",
    href: "#services",
    children: [
      {
        label: "Mechanika",
        href: "/uslugi/mechanika",
      },
      {
        label: "Wymiana rozrządów BMW",
        href: "/uslugi/rozrzady-bmw",
      },
      {
        label: "Klimatyzacja",
        href: "/uslugi/klimatyzacja",
      },
      {
        label: "Elektryka",
        href: "/uslugi/elektryka",
      },
      {
        label: "Ogrzewania Postojowe",
        href: "/uslugi/ogrzewania-postojowe",
      },
    ],
  },
  howItsWorks: {
    label: "Jak to działa?",
    href: "#how-to-schedule-service",
  },
  contact: {
    label: "Kontakt",
    href: "#contact",
  },
};
