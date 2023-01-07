import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Courses = () => {
  const urlPath = useParams();

  const pageData = {
    description: {
      h1: "IELTS REGULAR COURSE",
      p: "This is a detailed course that covers every aspect of IELTS Modules; Listening, Reading, Writing and Speaking. We will provide you 20 lectures of live session and 4 Mock tests. Along with that you will be given practice materials which will help tpoo improve your modules",
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
  };

  return (
    <div>
      <div className="course-animated-bg bg-fixed bg-cover bg-no-repeat h-[300px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-0 flex justify-start items-end text-white ">
          <h1 className="pb-10  text-5xl w-[95%] mx-auto font-bold">
            Courses {" " + urlPath?.course_id}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Courses;
