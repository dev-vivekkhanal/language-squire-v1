import axios from "axios";
import React, { useEffect, useState } from "react";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useNavigate } from "react-router-dom";

const StudentCurriculum = () => {
  // local variables
  const navigate = useNavigate();
  const [pageData, setPageData] = useState([]);
  const [selectedCurriculum, setSelectedCurriculum] = useState();
  const [curriculumSelector, setCurriculumSelector] = useState(false);

  //   page data from api
  useEffect(() => {
    const formData = new FormData();
    formData?.append("token", localStorage?.getItem("token"));
    axios.post(VITE_BASE_LINK + "/userCurriculum", formData)?.then((res) => {
      console.log("response of curriculum", res?.data);
      setPageData(res?.data?.pageData);
      setSelectedCurriculum(res?.data?.pageData[0]?.id);
    });
  }, []);

  return (
    <div className="pl-[300px]">
      <div className="p-5 pt-10 flex justify-between items-start ">
        <div>
          <h1 className="text-xl font-semibold font-nanum capitalize">
            Curriculum
          </h1>
        </div>

        <div
          onClick={() => {
            localStorage?.clear();
            navigate("/");
          }}
          title="Logout"
          className="bg-[#FFDF58] p-2 rounded-full flex justify-center items-center hover:bg-black group transition-all cursor-pointer active:scale-95 duration-300"
        >
          <LogoutRoundedIcon
            fontSize="medium"
            className="group-hover:text-[#FFDF58] transition-all duration-300"
          />
        </div>
      </div>

      <div className="p-5">
        {/* select curriculum */}
        <div className="relative">
          <button
            onClick={() => setCurriculumSelector(!curriculumSelector)}
            className="bg-gray-100 text-black p-5 rounded-lg w-full max-w-[400px] text-lg flex justify-between gap-5 "
          >
            <h1>Orientation</h1>
            <h1 className="rotate-90">&gt;</h1>
          </button>
          <div
            className={` ${
              curriculumSelector ? "absolute" : "hidden"
            } top-[110%] rounded-lg w-full max-w-[400px] text-lg  bg-gray-100 overflow-hidden`}
          >
            <div className="h-[350px] overflow-y-scroll">
              {pageData?.map((data, index) => {
                return (
                  <button
                    className="px-5 py-3 hover:bg-gray-200 w-full text-left"
                    key={index}
                    onClick={() => {
                      setSelectedCurriculum(data?.id);
                    }}
                  >
                    {data?.sectionName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* image array */}
        <div>
          {pageData
            ?.filter((filter_data, filter_index) => {
              if (filter_data?.id === selectedCurriculum) {
                return filter_data;
              }
            })
            ?.map((data, index) => {
              return (
                <div key={index} className="max-h-[80vh] overflow-y-scroll">
                  {data?.image_array?.map((image_data, image_index) => {
                    return (
                      <div key={image_index} className=" my-2">
                        <img
                          src={VITE_BASE_LINK + "/" + data?.path + image_data}
                          alt=""
                          className="w-full"
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default StudentCurriculum;
