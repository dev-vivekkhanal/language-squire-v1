const navLinks = [
  {
    link_name: "About",
    link_path: "/about-us",
  },
  {
    link_name: "Courses",
    link_path: "/courses",
    sub_links: [
      {
        link_name: "IELTS regular course",
        link_path: "/",
      },
      {
        link_name: "IELTS crash course",
        link_path: "/",
      },
      {
        link_name: "IELTS polishing course",
        link_path: "/",
      },
      {
        link_name: "Interview preparation",
        link_path: "/",
      },
    ],
  },
  {
    link_name: "Check your level",
    link_path: "/",
    sub_links: [
      {
        link_name: "Beginner",
        link_path: "/",
      },
      {
        link_name: "Intermediate",
        link_path: "/",
      },
      {
        link_name: "Advance",
        link_path: "/",
      },
    ],
  },

  {
    link_name: "Contact",
    link_path: "/",
  },
];

const header_cta = [
  {
    cta_name: "Sign In",
    cta_path: "/",
    cta_type: "Secondary",
  },

  {
    cta_name: "Sign Up",
    cta_path: "/",
    cta_type: "Primary",
  },
];

export { navLinks, header_cta };
