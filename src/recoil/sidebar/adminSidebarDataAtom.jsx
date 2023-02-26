import { atom } from "recoil";

const adminSidebarDataAtom = atom(
  {
    key: "adminSidebarDataAtom", // unique ID (with respect to other atoms/selectors)
    default: {
      user_details: {
        first_name: "",
        last_name: "",
        email: "",
      },
      sidebar_links: [
        {
          link_name: "Dashboard",
          link_path: "/admin/dashboard",
          link_image: "/",
        },
        {
          link_name: "Users",
          link_path: "/admin/students",
          link_image: "/",
        },
        {
          link_name: "Assestment",
          link_path: "/admin/assestment",
          link_image: "/",
        },
        {
          link_name: "Curriculum",
          link_path: "/admin/curriculum",
          link_image: "/",
        },
        {
          link_name: "Reports",
          link_path: "/admin/reports",
          link_image: "/",
        },
      ],
    },
  } // default value (aka initial value)
);

export { adminSidebarDataAtom };
