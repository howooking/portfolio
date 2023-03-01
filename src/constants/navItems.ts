type NavItem = {
  title: string;
  section: string;
  isLink: boolean;
};

export const NAV_ITEMS: Array<NavItem> = [
  {
    title: "<About />",
    section: "/#about",
    isLink: false,
  },
  {
    title: "<Skills />",
    section: "/#skills",
    isLink: false,
  },
  {
    title: "<Projects />",
    section: "/#projects",
    isLink: false,
  },
  {
    title: "<Career />",
    section: "/#career",
    isLink: false,
  },
  {
    title: "<Comments />",
    section: "/comments",
    isLink: true,
  },
];
