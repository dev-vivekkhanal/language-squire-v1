import React, { useState } from "react";
import { useRecoilState } from "recoil";
// helpers
import { navLinks, header_cta } from "../../helpers/headerLinks/headerLinks";

// recoil
import { sidebarStatusAtom } from "../../recoil/sidebar/SidebarStatusAtom";

// assets
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Sidebar = () => {
  // global variables
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarStatusAtom);
  // local variables
  const [activeLinkAccordian, setActiveLinkAccordian] = useState(null);
  return (
    <aside
      className={`md:hidden black-gradient h-screen  fixed top-0 right-0 bottom-0 w-[70%] z-[49] pt-28 text-white transition-all duration-300 ${
        sidebarStatus ? "max-w-[350px] ease-in" : "max-w-0 ease-out"
      } `}
    >
      <div className="relative h-full min-w-[170px] sm:min-w-[300px]">
        <div className=" flex flex-col gap-2">
          {navLinks?.map((linkData, linkIndex) => {
            return (
              <div key={linkIndex}>
                <div
                  className=" p-5 border-b-[#131313] border-b cursor-pointer"
                  onClick={() =>
                    setActiveLinkAccordian(
                      activeLinkAccordian === linkData?.link_name
                        ? null
                        : linkData?.link_name
                    )
                  }
                >
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg sm:text-xl tracking-wide ">
                      {linkData?.link_name}
                    </h1>
                    {linkData?.sub_links && (
                      <h1
                        className={` transition-all duration-200 ${
                          activeLinkAccordian === linkData?.link_name
                            ? "rotate-180"
                            : "rotate-0"
                        } `}
                      >
                        <KeyboardArrowDownRoundedIcon />
                      </h1>
                    )}
                  </div>
                </div>

                <div
                  className={`  overflow-hidden border-b-[#131313] border-b px-5 ${
                    activeLinkAccordian === linkData?.link_name &&
                    linkData?.sub_links
                      ? " max-h-[500px] ease-in transition-all duration-300  "
                      : "max-h-[0px] ease-out transition-all duration-300"
                  }   `}
                >
                  <div className="flex flex-col gap-1 min-h-full">
                    {linkData?.sub_links?.map((subLinkData, subLinkIndex) => {
                      return (
                        <div key={subLinkIndex} className="cursor-pointer">
                          <h1 className="text-base sm:text-lg py-2 text-gray-300 ">
                            {subLinkData?.link_name}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-black bg-opacity-20 absolute bottom-0 right-0 left-0">
          <div className="flex flex-col sm:flex-row  w-full justify-center items-center p-5 gap-5">
            {header_cta?.map((data, index) => {
              return (
                <div key={index}>
                  <button
                    className={` ${
                      data?.cta_type === "Primary"
                        ? "text-yellow-500 border border-yellow-500 "
                        : " text-white"
                    } rounded-lg p-3 px-4 font-semibold active:scale-95 transition-all`}
                  >
                    {data?.cta_name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
