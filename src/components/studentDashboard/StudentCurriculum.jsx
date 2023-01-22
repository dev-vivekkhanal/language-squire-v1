import axios from "axios";
import React, { useEffect } from "react";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

const StudentCurriculum = () => {
  const pageData = [
    {
      id: 1,
      sectionName: "Section1",
      path: "/assets/img/",
      image_array: ["course10", "course11"],
    },
    {
      id: 2,
      sectionName: "Section2",
      path: "/assets/img/",
      image_array: ["course20", "course21"],
    },
  ];

  //   page data from api
  useEffect(() => {
    const formData = new FormData();
    formData?.append("token", localStorage?.getItem("token"));
    axios.post(VITE_BASE_LINK + "/userCurriculum", formData)?.then((res) => {
      console.log("response of curriculum", res?.data);
    });
  }, []);

  return (
    <div>
      <h1>Student Curriculum</h1>
    </div>
  );
};

export default StudentCurriculum;
