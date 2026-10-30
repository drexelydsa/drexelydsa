export type NavItem = {
  title: string;
  route?: string;
  items?: { title: string; route: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  { title: "Home", route: "/" },
  {
    title: "About",
    items: [{ title: "Drexel YDSA Constitution", route: "/constitution" }],
  },
  { title: "Events", route: "/events" },
  {
    title: "Get Involved",
    items: [
      { title: "Campaigns", route: "/campaigns" },
      { title: "Interest Form", route: "https://forms.gle/fmdK5MUeJHJ1YXDRA" },
      { title: "Discord", route: "https://discord.drexelydsa.org" },
    ],
  },
];
