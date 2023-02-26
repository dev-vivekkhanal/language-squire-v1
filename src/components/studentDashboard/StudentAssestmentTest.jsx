import axios from "axios";
import React, { useEffect, useState } from "react";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

const StudentAssestmentTest = () => {
  const testData2 = [
    {
      test_name: "Mock Test 3",

      sections: [
        {
          id: 1,
          name: "Listening",
          time: 40,
        },
        {
          id: 2,
          name: "Reading",
          time: 60,
        },
        {
          id: 3,
          name: "Writing",
          time: 60,
        },
        {
          id: 4,
          name: "Speaking",
          time: null,
        },
      ],
    },

    {
      test_name: "Mock Test 4",

      sections: [
        {
          id: 1,
          name: "Listening",
          time: 40,
        },
        {
          id: 2,
          name: "Reading",
          time: 60,
        },
        {
          id: 3,
          name: "Writing",
          time: 60,
        },
        {
          id: 4,
          name: "Speaking",
          time: null,
        },
      ],
    },
  ];

  const [testData, setTestData] = useState([]);
  useEffect(() => {
    let formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    axios.post(VITE_BASE_LINK + "/studentTestView", formData)?.then((res) => {
      // console.log(res?.data);
      setTestData(res?.data);
    });
  }, []);

  useEffect(() => {
    console.log("testData", testData);
  }, [testData]);

  return (
    <div className="p-5">
      <div>
        {testData?.map((data, index) => {
          return (
            <div key={index} className="p-5 rounded-lg mb-10 bg-gray-50">
              <h1 className="font-semibold text-xl">{data?.test}</h1>

              <div className="flex flex-wrap gap-5 justify-between items-center mt-5">
                {data?.section?.map((section_data, section_index) => {
                  return (
                    <div
                      key={section_index}
                      className="bg-white rounded-lg p-5 flex-1"
                    >
                      <h2 className="text-lg text-center text-gray-500">
                        {section_data?.name}
                      </h2>

                      <div className="flex justify-center items-end gap-1">
                        <h1 className="text-3xl text-center mt-5 font-medium text-gray-600 ">
                          {section_data?.time ? section_data?.time : "NA"}
                        </h1>

                        {section_data?.time && (
                          <span className="text-gray-500 tex-sm ">mins</span>
                        )}
                      </div>

                      <button className="bg-[#ffee58] mt-5 p-3 active:scale-95 transition-all w-full rounded-lg">
                        Start Now
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentAssestmentTest;
