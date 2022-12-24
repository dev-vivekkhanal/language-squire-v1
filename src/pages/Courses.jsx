import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Courses = () => {
  const urlPath = useParams();

  return (
    <div>
      <div className="course-animated-bg bg-cover bg-no-repeat h-[300px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-0 flex justify-start items-end text-white ">
          <h1 className="pb-10  text-5xl w-[95%] mx-auto font-bold">Courses</h1>
        </div>
      </div>
    </div>
  );
};

export default Courses;
