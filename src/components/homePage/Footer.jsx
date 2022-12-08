import React from "react";

// assets
import Logo from "../../assets/landingPage/footer/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const pageData = {
    logo: {
      image: Logo,
      desc: "Our unique 1:1 training with a custom schedule for each student has proven to help students achieve their desired band score.",
    },
    contact: {
      heading: "Contact",
      email: "info@languageSquire.com",
      phone: "+91-987456123",
    },
    legal: {
      heading: "Legal",
      links: [
        {
          link_name: "Terms and Conditions",
          link_path: "/",
        },
        {
          link_name: "Privacy and Policy",
          link_path: "/",
        },
        {
          link_name: "Refund Policy",
          link_path: "/",
        },
      ],
    },

    social: {
      heading: "Social",
      links: [
        {
          link_icon: <InstagramIcon />,
          link_path: "/",
        },

        {
          link_icon: <FacebookIcon />,
          link_path: "/",
        },

        {
          link_icon: <TwitterIcon />,
          link_path: "/",
        },
        {
          link_icon: <LinkedInIcon />,
          link_path: "/",
        },
      ],
    },
  };
  return (
    <footer className="bg-[#000000] text-[#909299]  pt-32 ">
      <div className="w-[85%]  mx-auto">
        <div className="flex flex-col justify-between md:justify-between gap-10 md:gap-16 sm:flex-row pb-20">
          <div className="">
            <div className="w-full max-w-[200px] ">
              <img
                src={pageData?.logo?.image}
                alt="Language Squire"
                className="w-full pb-5"
              />
              <p className="text-justify ">{pageData?.logo?.desc}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:justify-between w-full ">
            <div>
              <div className="flex gap-5">
                <div className="bg-[#ffdf58] w-[5px]"></div>
                <h1 className="text-white uppercase text-lg font-semibold">
                  {pageData?.contact?.heading}
                </h1>
              </div>

              <div className="pt-5 flex flex-col gap-3">
                <p className="hover:text-white transition-all cursor-pointer">
                  {pageData?.contact?.email}
                </p>
                <p className="hover:text-white transition-all cursor-pointer">
                  {pageData?.contact?.phone}
                </p>
              </div>
            </div>

            <div>
              <div className="flex gap-5">
                <div className="bg-[#ffdf58] w-[5px]"></div>
                <h1 className="text-white uppercase text-lg font-semibold">
                  {pageData?.legal?.heading}
                </h1>
              </div>
              <div className="pt-5 flex flex-col gap-3">
                {pageData?.legal?.links?.map((data, index) => {
                  return (
                    <a
                      href={data?.link_path}
                      key={index}
                      className="block hover:text-white transition-all"
                    >
                      {data?.link_name}
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex gap-5">
                <div className="bg-[#ffdf58] w-[5px]"></div>
                <h1 className="text-white uppercase text-lg font-semibold">
                  {pageData?.social?.heading}
                </h1>
              </div>

              <div className="pt-5 flex gap-3">
                {pageData?.social?.links?.map((data, index) => {
                  return (
                    <a
                      href={data?.link_path}
                      key={index}
                      className="block hover:text-white transition-all"
                    >
                      {data?.link_icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pb-10">
          <p>
            Copyright © {new Date().getFullYear()}, Designed & All rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
