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
        link_path: "/courses/1",
      },
      {
        link_name: "IELTS crash course",
        link_path: "/courses/2",
      },
      {
        link_name: "IELTS polishing course",
        link_path: "/courses/3",
      },
      {
        link_name: "Interview preparation",
        link_path: "/courses/4",
      },
    ],
  },
  {
    link_name: "Check your level",
    link_path: "/level_check",
    sub_links: [
      {
        link_name: "Beginner",
        link_path: "/level_check/1",
      },
      {
        link_name: "Intermediate",
        link_path: "/level_check/2",
      },
      {
        link_name: "Advance",
        link_path: "/level_check/3",
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
    cta_path: "/sign_in",
    cta_type: "Secondary",
  },

  {
    cta_name: "Sign Up",
    cta_path: "/sign_up",
    cta_type: "Primary",
  },
];

export { navLinks, header_cta };
