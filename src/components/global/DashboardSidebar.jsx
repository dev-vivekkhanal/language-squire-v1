import React from "react";
import { Link, useLocation } from "react-router-dom";

// assets
import logo from "../../assets/header/logo.png";

const DashboardSidebar = () => {
  // links
  const sidebarData = {
    user_details: {
      first_name: localStorage.getItem("first_name"),
      last_name: localStorage.getItem("last_name"),
      email: localStorage.getItem("email"),
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
  };

  const location = useLocation();
  return (
    <>
      {/* hamburger menu */}

      {/* <button
        className="fixed top-5 left-5 z-[50] w-[35px] aspect-square flex justify-center gap-2 flex-col active:scale-95"
      >
        <div
          className={`  transition-all bg-yellow-500 h-[3px] rounded-lg w-full`}
        ></div>
        <div className={` bg-yellow-500 h-[3px] rounded-lg w-full`}></div>
        <div
          className={`transition-all bg-yellow-500 h-[3px] rounded-lg w-full`}
        ></div>
      </button> */}

      {/* sidebar */}
      <div className="black-gradient h-screen  fixed top-0 left-0 bottom-0 z-[49]  text-white transition-all duration-300 w-full max-w-[300px] ease-in  flex flex-col justify-between ">
        <div>
          {/* contents wrapper */}
          <div>
            {/* logo */}
            <div className="py-5">
              <img
                src={logo}
                alt="Language Squire"
                className="max-w-[200px] mx-auto"
              />
            </div>
          </div>
          {/* links */}
          <div className="mt-10">
            {sidebarData?.sidebar_links?.map((data, index) => {
              return (
                <Link
                  to={data?.link_path}
                  key={index}
                  className={`py-5 cursor-pointer group  block transition-all ${
                    location?.pathname == data?.link_path
                      ? "bg-white bg-opacity-5"
                      : "hover:bg-white hover:bg-opacity-5"
                  } `}
                >
                  <div
                    className={` ${
                      location?.pathname == data?.link_path
                        ? "text-[#FFDF58]"
                        : "group-hover:text-[#FFDF58]"
                    } flex items-center gap-5 w-[90%] mx-auto  transition-all`}
                  >
                    <div className="aspect-square w-[30px] rounded-full bg-[#FFDF58] "></div>
                    <div>{data?.link_name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* user details */}
        <div className="py-5 cursor-pointer group transition-all">
          <div className="flex items-center gap-5 w-[90%] mx-auto  transition-all">
            <div className="aspect-square w-[40px] rounded-full bg-[#FFDF58] flex justify-center items-center text-black font-semibold uppercase">
              {sidebarData?.user_details?.first_name?.split("")[0]}
              {sidebarData?.user_details?.last_name?.split("")[0]}
            </div>
            <div>
              <h1 className="truncate capitalize">
                {" "}
                {sidebarData?.user_details?.first_name}{" "}
                {sidebarData?.user_details?.last_name}
              </h1>
              <h2 className="text-sm opacity-60  truncate  max-w-[200px]">
                {sidebarData?.user_details?.email}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
