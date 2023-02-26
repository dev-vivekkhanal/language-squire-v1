import { atom } from "recoil";

const sidebarDataAtom = atom(
  {
    key: "sidebarDataAtom", // unique ID (with respect to other atoms/selectors)
    default: {
      user_details: {
        first_name: "",
        last_name: "",
        email: "",
      },
      sidebar_links: [
        {
          link_name: "Dashboard",
          link_path: "/user/dashboard",
          link_image: "/",
        },
        {
          link_name: "Profile",
          link_path: "/user/profile",
          link_image: "/",
        },
        {
          link_name: "Assestment",
          link_path: "/user/assestment",
          link_image: "/",
        },
        {
          link_name: "Curriculum",
          link_path: "/user/curriculum",
          link_image: "/",
        },
        {
          link_name: "Instructor",
          link_path: "/user/instructor",
          link_image: "/",
        },
        {
          link_name: "Refer",
          link_path: "/user/refer",
          link_image: "/",
        },
      ],
    },
  } // default value (aka initial value)
);

export { sidebarDataAtom };
