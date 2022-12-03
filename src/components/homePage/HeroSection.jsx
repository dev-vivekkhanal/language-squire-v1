import React from "react";

// assets
import heroImage from "../../assets/landingPage/heroSection/hero-img.png";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";

const HeroSection = () => {
  return (
    <div className=" black-gradient">
      <div className="pb-10 flex flex-col md:flex-row  justify-between items-start pt-10 h-full gap-5 w-[95%] md:w-[85%] mx-auto ">
        <div className="flex-1 text-[#f1f1f1] w-[80%] md:w-full 2xl:py-20">
          <h1 className="text-4xl md:text-5xl  xl:text-6xl font-bold leading-tight pt-10">
            Encountering trouble preparing for{" "}
            <span className="text-yellow-500">IELTS ?</span>{" "}
          </h1>
          <p className="text-sm md:text-base mt-5 md:mt-7 lg:mt-10 text-gray-300">
            Our unique 1:1 training with a custom schedule for each student has
            proven to help students achieve their desired band score.
          </p>

          <button className="mt-5 md:mt-7 lg:mt-10 px-15 md:px-16 yellow-gradient text-black rounded-lg p-4 font-semibold text-base lg:text-xl transition-all active:scale-95">
            Register Now
          </button>

          <p className="text-sm md:text-base mt-5 md:mt-7 lg:mt-10 font-semibold">
            Hurry up! <span className="text-yellow-500">500+</span> students
            have already enrolled.
          </p>
        </div>

        {/* hero img */}
        <div className="flex-1 block ">
          <div className="yellow-gradient w-fit max-w-[50%]  sm:max-w-[40%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[60%]  ml-auto aspect-square overflow-hidden rounded-full">
            <img
              src={heroImage}
              alt="..."
              className=" aspect-square object-contain  -translate-x-2 "
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f1f1f1] p-5 sm:py-10 md:py-16  -mt-20 rounded-lg translate-y-[50%] w-[90%] mx-auto flex  justify-around items-center gap-5 ">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 ">
          <div className="bg-[#ffdf58] p-2 rounded-full aspect-square">
            <PeopleRoundedIcon fontSize="large" />
          </div>

          <div>
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center sm:text-left">
              500+
            </h1>
            <h1 className="text-gray-500 text-xs sm:text-sm  text-center sm:text-left">
              Students Enrolled
            </h1>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4  ">
          <div className="bg-[#ffdf58] p-2 rounded-full aspect-square">
            <SchoolRoundedIcon fontSize="large" />
          </div>

          <div>
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center sm:text-left">
              30+
            </h1>
            <h1 className="text-gray-500 text-xs sm:text-sm  text-center sm:text-left">
              Top Educator
            </h1>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 ">
          <div className="bg-[#ffdf58] p-2 rounded-full aspect-square ">
            <BusinessCenterRoundedIcon fontSize="large" />
          </div>

          <div>
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center sm:text-left">
              20+
            </h1>
            <h1 className="text-gray-500 text-xs sm:text-sm  text-center sm:text-left">
              Years Experience
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
