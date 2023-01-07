import React, { useState } from "react";

// helpers
import { navLinks, header_cta } from "../../helpers/headerLinks/headerLinks";

// assets
import logo from "../../assets/header/logo.png";
// recoil
import { useRecoilState } from "recoil";
import { sidebarStatusAtom } from "../../recoil/sidebar/SidebarStatusAtom";

// assets
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Link } from "react-router-dom";

const Header = () => {
  // global variables
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarStatusAtom);

  // local variables
  const [activeLinkAccordian, setActiveLinkAccordian] = useState(null);

  return (
    <header className="bg-black  sticky top-0 z-[50] ">
      <div className="w-[95%] mx-auto flex justify-between items-center py-5 ">
        {/* logo */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="language squire"
              className="w-[200px] md:w-[130px] lg:w-[150px] xl:w-[180px]"
            />
          </Link>
        </div>

        {/* nav links after md */}
        <div className="hidden md:block text-[#f1f1f1] tracking-wide">
          <div className="flex gap-5 xl:gap-10 text-sm lg:text-base xl:text-lg justify-center items-center">
            {navLinks?.map((linkData, linkIndex) => {
              return (
                <div key={linkIndex} className=" group relative ">
                  <div
                    onClick={() =>
                      setActiveLinkAccordian(
                        activeLinkAccordian === linkData?.link_name
                          ? null
                          : linkData?.link_name
                      )
                    }
                    className={` ${
                      activeLinkAccordian === linkData?.link_name
                        ? "text-yellow-500"
                        : ""
                    } p-2 lg:px-4 flex justify-between gap-[2px] xl:gap-2 items-center cursor-pointer `}
                  >
                    <h1 className="group-hover:text-yellow-500  transition-all">
                      {linkData?.link_name}
                    </h1>
                    {linkData?.sub_links && (
                      <h1 className="group-hover:text-yellow-500 transition-all">
                        <KeyboardArrowDownRoundedIcon fontSize="small" />
                      </h1>
                    )}
                  </div>

                  <div
                    className={` ${
                      activeLinkAccordian === linkData?.link_name &&
                      linkData?.sub_links
                        ? "  max-h-[900px]"
                        : "max-h-[0px] "
                    } overflow-hidden bg-[#FFDF58] rounded-md text-black shadow-2xl transition-all duration-300 absolute top-[110%] w-max min-w-[200px]`}
                  >
                    <div>
                      {linkData?.sub_links?.map(
                        (sub_link_data, sub_link_index) => {
                          return (
                            <Link
                              key={sub_link_index}
                              to={sub_link_data?.link_path}
                            >
                              <div className=" cursor-pointer hover:bg-[#ffd30f] transition-all ">
                                <h1 className=" p-3 text-sm text-black">
                                  {sub_link_data?.link_name}
                                </h1>
                              </div>
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* cta after md */}
        <div className="hidden md:block">
          <div className="flex flex-row  w-full justify-center items-center text-sm lg:text-base xl:text-lg gap-2 lg:gap-4">
            {header_cta?.map((data, index) => {
              return (
                <div key={index}>
                  <Link
                    to={data?.cta_path}
                    className={` ${
                      data?.cta_type === "Primary"
                        ? "text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-black"
                        : " text-white  hover:text-yellow-500"
                    } rounded-lg p-2 px-3 lg:p-3 lg:px-4 xl:px-6 font-semibold active:scale-95 transition-all`}
                  >
                    {data?.cta_name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* hamburger */}
        <button
          onClick={() => setSidebarStatus(!sidebarStatus)}
          className="md:hidden w-[35px] aspect-square flex justify-center gap-2 flex-col"
        >
          <div
            className={` ${
              sidebarStatus ? " rotate-45 translate-y-2 " : ""
            } transition-all bg-yellow-500 h-[3px] rounded-lg w-full`}
          ></div>
          <div
            className={` ${
              sidebarStatus ? "hidden " : " block"
            }  bg-yellow-500 h-[3px] rounded-lg w-full`}
          ></div>
          <div
            className={` ${
              sidebarStatus ? " -rotate-45 -translate-y-[2px]" : " "
            } transition-all bg-yellow-500 h-[3px] rounded-lg w-full`}
          ></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
