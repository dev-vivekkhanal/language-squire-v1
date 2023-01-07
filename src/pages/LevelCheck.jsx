import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const LevelCheck = () => {
  const urlPath = useParams();

  return (
    <div>
      <div className="course-animated-bg bg-fixed bg-cover bg-no-repeat h-[300px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-0 flex justify-start items-end text-white ">
          <h1 className="pb-10  text-5xl w-[95%] mx-auto font-bold">
            Check your level {" " + urlPath?.check_id}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LevelCheck;
