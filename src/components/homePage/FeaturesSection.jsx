import React from "react";

// assets
import cube_icon from "../../assets/landingPage/featureSection/cube.svg";
import capsule_icon from "../../assets/landingPage/featureSection/capsule.svg";
import cuboid_icon from "../../assets/landingPage/featureSection/cuboid.svg";
import cone_icon from "../../assets/landingPage/featureSection/cone.svg";
import cylinder_icon from "../../assets/landingPage/featureSection/cylinder.svg";
import donut_icon from "../../assets/landingPage/featureSection/donut.svg";

const FeaturesSection = () => {
  const pageData = [
    {
      image: cube_icon,
      h1: "Academic / General",
      p: "Achieve your desire score of IELTS with absolute and advance methodologies of world class faculity.",
    },

    {
      image: capsule_icon,
      h1: "Interview Preparation",
      p: "Language Squire team also provides you a complete in-depth preparation for cracking F-1 Student Visa and other interviews",
    },

    {
      image: cuboid_icon,
      h1: "AI enabled performance analysis",
      p: "We provide a vivid AI-Generated CR analysis similar to final exam.",
    },

    {
      image: cone_icon,
      h1: "Business",
      p: "Advance your business english in e-mail writing, memos and speaking like a native speak.",
    },

    {
      image: cylinder_icon,
      h1: "Train the trainer",
      p: "Expand your curriculum through blended learning.",
    },

    {
      image: donut_icon,
      h1: "Visa assistance",
      p: "Our team is in collaboration with world class visa assistance organizations that will help you process your file with ease.",
    },
  ];
  return (
    <section>
      <div className="w-[95%] md:w-[85%] mx-auto py-32 text-[#1e1e1e]">
        <div className="py-16 flex flex-col  gap-5">
          <div className="py-5 ">
            <h1 className="text-2xl md:text-3xl  xl:text-4xl font-bold">
              Why Choose{" "}
              <span className="block pt-2 text-3xl md:text-4xl  xl:text-5xl">
                Language Squire?
              </span>
            </h1>
            <p className="py-5 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              eaque corrupti recusandae consequuntur. Esse veritatis alias
              quibusdam tempora obcaecati ad.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 ">
              {pageData?.map((data, index) => {
                return (
                  <div key={index} className="p-5 group cursor-pointer">
                    <div className="w-[100px] md:w-[150px]   ">
                      <img
                        src={data?.image}
                        alt="..."
                        className=" aspect-square group-hover:scale-105 transition-all"
                      />
                    </div>
                    <div className="w-[80%]">
                      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold py-5">
                        {data?.h1}
                      </h1>
                      <p className=" text-gray-800 group-hover:text-black group-hover:font-medium text-justify">
                        {data?.p}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
