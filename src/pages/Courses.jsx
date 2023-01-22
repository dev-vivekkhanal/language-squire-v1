import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/homePage/Footer";

const Courses = () => {
  const urlPath = useParams();

  useEffect(() => {
    console.log(urlPath);
  }, [urlPath]);

  const pageData = [
    {
      id: "1",
      description: {
        h1: "IELTS REGULAR COURSE",
        p: "This is a detailed course that covers every aspect of IELTS Modules; Listening, Reading, Writing and Speaking. We will provide you 20 lectures of live session and 4 Mock tests. Along with that you will be given practice materials which will help to improve your modules",
        link: "/",
      },

      features: [
        {
          h2: "personalised online coaching",
          p: "We include a group of professional trainers who will guide you through each stage of preparing for the test with detailed Study Plans for all the four modules. We have multiple Weekday Batches for early mornings (6:00 A.M. GMT +5:30) and choice of Taking late evening batches (9:00 P.M GMT +5:30) as per your convenience",
        },

        {
          h2: "unlimited practice material",
          p: "You can prepare for your test with a range of unlimited IELTS study material that will get you acquainted with the test format and also improve your confidence when writing, speaking, reading, and listening in English.",
        },

        {
          h2: "progress check",
          p: "We assure to provide the evaluation of a Completed test that is marked by IELTS trained and qualified markers. Along with that, you will receive a Feedback Report including an indicative band score for each section of the test.",
        },

        {
          h2: "fortnight masterclasses",
          p: "Special Master Classes cover a wide range of topics across all four IELTS modules. Each session is conducted by a qualified IELTS expert, who provides in-depth guidance on various aspects of the test and answers your questions to help your preparation.",
        },

        {
          h2: "v.i.p batches",
          p: "With the intensive coaching, you will get complete guidanceon everything you need to know as you prepare for the IELTS test.",
        },

        {
          h2: "mock test",
          p: "IELTS mock tests are essential tools that any IELTS candidate has in their toolset. These tests provide you with valuable insightsinto your level and scores. In addition, many experts believe that taking Mock tests before sitting the actual IELTS exam can help in overcoming performance fear.",
        },
      ],
    },
    {
      id: "2",
      description: {
        h1: "IELTS CRASH COURSE",
        p: "This Course enables you to get the required detatiled description of all the modules. This is 14 days planned approach with extensive 12 live lectures and 2 Mock Test",
        link: "/",
      },

      features: [
        {
          h2: "PERSONALISED ONLINE COACHING",
          p: "We include a group of professional trainers who will guide you through each stage of preparing for the test with detailed Study Plans for all the four modules. We have multiple Weekday Batches for early mornings (6:00 A.M. GMT +5:30) and choice of Taking late evening batches (9:00 P.M GMT +5:30) as per your convenience",
        },

        {
          h2: "UNLIMITED PRACTICE MATERIAL",
          p: "You can prepare for your test with a range of unlimited IELTS study material that will get you acquainted with the test format and also improve your confidence when writing, speaking, reading, and listening in English.",
        },

        {
          h2: "PROGRESS CHECK",
          p: "We assure to provide the evaluation of a Completed test that is marked by IELTS trained and qualified markers. Along with that, you will receive a Feedback Report including an indicative band score for each section of the test.",
        },

        {
          h2: "FORTNIGHT MASTERCLASSES",
          p: "Special Master Classes cover a wide range of topics across all four IELTS modules. Each session is conducted by a qualified IELTS expert, who provides in-depth guidance on various aspects of the test and answers your questions to help your preparation.",
        },

        {
          h2: "V.I.P BATCHES",
          p: "With the intensive coaching, you will get complete guidanceon everything you need to know as you prepare for the IELTS test.",
        },

        {
          h2: "MOCK TEST",
          p: "IELTS mock tests are essential tools that any IELTS candidate has in their toolset. These tests provide you with valuable insightsinto your level and scores. In addition, many experts believe that taking Mock tests before sitting the actual IELTS exam can help in overcoming performance fear.",
        },
      ],
    },
    {
      id: "3",
      description: {
        h1: "IELTS POLISHING COURSE",
        p: "This course enables you get 5 live polishing sessions. As the name suggests, this course is highly recommended to students before taking final attempt. We use highly most extensive approach in this course to ensure student getting desired score.",
        link: "/",
      },

      features: [
        {
          h2: "LIVE MOCK TEST EVALUATIONS",
          p: "IELTS mock tests are essential tools that any IELTS candidate has in their toolset. These tests provide you with valuable insights into your level and scores. The candidate can get their mock test to evaluate twice throughout the course period.",
        },

        {
          h2: "DOUBT CLEARING",
          p: "Gets access to specific unlimited doubt clearingboth online and offline based on particular modules without any huddles.",
        },

        {
          h2: "ADDITIONAL COMBO",
          p: "Book your private online sessions with a tutor of your choice and focus on the areas important to you. Work together on both giving full speaking and getting writing to evaluate. Sessionsare designed to get you speaking confidently and live writing evaluations.",
        },

        {
          h2: "SELF-PRACTICE MATERIAL",
          p: "You can prepare for your test with a range of unlimited IELTS study material that will get you acquainted with the test format and also improve your confidence when writing, speaking, reading, and listening in English.",
        },

        {
          h2: "INTENSIVE COACHING/ V.I.P BATCHES",
          p: "With intensive coaching, you will get complete guidance on everything you need to know.",
        },

        {
          h2: "FLEXIBLE BATCHES",
          p: "We have multiple Weekday Batches for early mornings (6:00 A.M. GMT +5:30) and the choice of Taking late evening batches(9:00 P.M GMT +5:30) as per your convenience.",
        },
      ],
    },

    {
      id: "4",
      description: {
        h1: "INTERVIEW PREPARATION",
        p: "We teach each concept from the ground up assuring that you have no backgroundin them. We focus a lot on the real-world applied aspects of all the topics. This course will offer valueable insights on resume-building and handling different interviews (Virtual as well as In-Person)",
        link: "/",
      },

      features: [
        {
          h2: "BASIC COMMUNICATION SKILLS",
          p: "This course aims to brush up vocabulary for intermediate level. You will build confidence while learning to converse about a variety of common to specific topics. In addition, you will build grammar knowledge by knowing your mistakes getting chance to correct it.",
        },

        {
          h2: "BUSSINESS ENGLISH",
          p: "This course covers the most common vocabulary and grammatical structures needed to do business in English. The course focuses on simulating real-life business situations to build professional communicative competency. You will also learn idioms being used in English-speaking offices across the globe.",
        },

        {
          h2: "PERSONALITY DEVELOPMENT",
          p: "The course aims to bring up a basic awareness about the significance of soft skills in professional and inter-personal communications and facilitate an all-round development of personality.",
        },

        {
          h2: "JOB INTERVIEW PREPERATION",
          p: "This course will give you confidence in your interviewing skills. Your expert tutor will give you valuable feedback as you practice using English to answer questions about your skills, experiences, and qualifications.",
        },

        {
          h2: "LIVE SPEAKING SESSIONS",
          p: "In live speaking sessions You will receive valuable feedback on your presentation or speech in areas such as pronunciation, pacing, and grammar. Along with that you will lean some skills of delivering answers on proper interview format.",
        },

        {
          h2: "MEMO WRITING/ RESUME BUILDING",
          p: "This course aims to improve your Business English writing skills by developing your use of vocabulary, grammar, understanding of different business writing genres, and your ability to write professional business documents.",
        },
      ],
    },
  ];

  return (
    <div>
      {pageData
        ?.filter((filter_data) => {
          if (filter_data?.id === urlPath?.course_id) {
            return filter_data;
          }
        })
        ?.map((data) => {
          return (
            <div key={data?.id} className="min-h-[100vh]">
              {/* banner */}
              <div className="course-animated-bg bg-fixed bg-cover bg-center bg-no-repeat h-[300px] relative">
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-start items-end text-white ">
                  <h1 className="pb-10  text-5xl w-[95%] mx-auto font-bold">
                    Courses
                  </h1>
                </div>
              </div>

              {/* contents */}
              <div className="w-[95%] md:w-[85%] mx-auto py-5 text-[#1e1e1e]">
                <div className="py-16 flex flex-col 2xl:flex-row  gap-5">
                  <div className="py-5 ">
                    <h1 className="text-2xl md:text-3xl  xl:text-4xl font-bold">
                      {data?.description?.h1}
                    </h1>
                    <p className="py-5 text-lg">{data?.description?.p}</p>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl  text-gray-500 flex items-center gap-10">
                      <div className="h-[2px] rounded-lg bg-gray-200 flex-1"></div>
                      <h1>Features</h1>
                      <div className="h-[2px] rounded-lg bg-gray-200 flex-1"></div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2  gap-5 xl:gap-10  items-start ">
                      {data?.features?.map((data, index) => {
                        return (
                          <div
                            key={index}
                            className="p-5 group border rounded-lg w-full h-full"
                          >
                            <div className="w-[100px] md:w-[150px]   ">
                              {/* <img
                                src={data?.image}
                                alt="..."
                                className=" aspect-square group-hover:scale-105 transition-all"
                              /> */}
                            </div>
                            <div className="w-[80%]">
                              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold py-5 capitalize">
                                {data?.h2}
                              </h1>
                              <p className=" text-gray-800 group-hover:text-black text-justify">
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
            </div>
          );
        })}

      <Footer />
    </div>
  );
};

export default Courses;
