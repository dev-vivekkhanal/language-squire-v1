import React from "react";

// assets
import course1 from "../../assets/landingPage/courseSection/course-1-min.png";
import course2 from "../../assets/landingPage/courseSection/course-2-min.png";
import course3 from "../../assets/landingPage/courseSection/course-3-min.png";
import course4 from "../../assets/landingPage/courseSection/course-4-min.png";
import course5 from "../../assets/landingPage/courseSection/course-5-min.png";

import StarIcon from "@mui/icons-material/Star";

const pageData = [
  {
    image: course1,
    h1: "IELTS Regular Course",
    p: "This is a detailed course that covers every aspect of IELTS Modules; Listening, Reading, Writing and Speaking. We will provide you 20 lectures of live session and 4 Mock tests. Along with that you will be given practice materials which will help tpoo improve your modules",
    stars: "4.5",
    students: "1023",
    price: "8k",
  },

  {
    image: course2,
    h1: "IELTS Crash Course",
    p: "This Course enables you to get the required detatiled description of all the modules. This is 14 days planned approach with extensive 12 live lectures and 2 Mock Test",
    stars: "4.2",
    students: "2543",
    price: "7k",
  },

  {
    image: course3,
    h1: "IELTS Polishing Course",
    p: "This course enables you get 5 live polishing sessions. As the name suggests, this course is highly recommended to students before taking final attempt. We use highly most extensive approach in this course to ensure student getting desired score.",
    stars: "4.8",
    students: "4220",
    price: "9k",
  },

  {
    image: course4,
    h1: "Interview Preparation",
    p: "We teach each concept from the ground up assuring that you have no backgroundin them. We focus a lot on the real-world applied aspects of all the topics. This course will offer valueable insights on resume-building and handling different interviews (Virtual as well as In-Person)",
    stars: "5.0",
    students: "6825",
    price: "10k",
  },
];

const CoursesSection = () => {
  return (
    <section className="bg-[#f1f1f1] py-32 ">
      <div className="w-[95%] md:w-[85%] mx-auto">
        <div className="text-[#1e1e1e]">
          <h1 className="text-2xl md:text-3xl  xl:text-4xl font-bold">
            Discover The Variety Of
            <span className="block pt-2 text-3xl md:text-4xl  xl:text-5xl">
              Courses Here
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mt-16">
          {pageData?.map((data, index) => {
            return (
              <div
                key={index}
                className="bg-[#1e1e1e] text-[#f1f1f1] rounded-xl overflow-hidden group cursor-pointer flex-col flex justify-between"
              >
                <div className="w-full">
                  <img
                    src={data?.image}
                    alt={data?.h1}
                    className="group-hover:scale-105 transition-all"
                  />

                  <div className="p-5  ">
                    <div className="">
                      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold py-5">
                        {data?.h1}
                      </h1>
                      <p className="text-justify text-gray-300">{data?.p}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 mt-5 flex items-center justify-between w-full ">
                  <div className="flex items-end gap-1 text-2xl font-semibold">
                    <span>{data?.stars}</span>
                    <span>
                      <StarIcon fontSize="large" className="text-[#ffdf58]" />
                    </span>

                    <span className="text-gray-400 font-light text-sm">
                      ({data?.students})
                    </span>
                  </div>

                  <div>
                    <h1 className="text-2xl font-semibold">
                      <span>₹ </span>
                      <span>{data?.price}</span>
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
