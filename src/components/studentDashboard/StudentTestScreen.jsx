import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

const StudentTestScreen = () => {
  const location = useParams();
  const navigate = useNavigate();
  const [pageData, setPageData] = useState();
  const [selectedTextField, setSelectedTextField] = useState();

  useEffect(() => {
    let formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    formData.append("test_id", location?.assignment_id);
    if (location?.test_type === "reading") {
      axios.post(VITE_BASE_LINK + "/readingTestPage", formData)?.then((res) => {
        setPageData(res?.data);
        console.log(res?.data);
        setSelectedTextField(res?.data?.answers[0]?.id);
      });
    }
  }, [location]);

  useEffect(() => {
    console.log("selectedTextField", selectedTextField);
    console.log("pageData", pageData?.answers);
  }, [pageData, selectedTextField]);

  return (
    <div>
      <div className="p-5 flex justify-between items-end">
        <h1 className="text-xl">{pageData?.test_name}</h1>

        <h2>{pageData?.time}</h2>
      </div>

      <div className="flex h-full">
        <div className="flex flex-col gap-5 flex-[0.6]  h-[90vh] overflow-y-scroll">
          {pageData?.image_array?.map((question_img, q_index) => {
            return (
              <div key={q_index} className="bg-gray-200 w-full  ">
                <img
                  src={VITE_BASE_LINK + "/" + pageData?.img_path + question_img}
                  alt={question_img}
                  className=""
                />
              </div>
            );
          })}
        </div>
        <div className="flex-[0.4] px-5">
          <div className="flex flex-col gap-5  h-[85vh] overflow-y-scroll">
            {pageData?.answers?.map((answer_data, answer_index) => {
              return (
                <div key={answer_index}>
                  <h1>Answer {answer_data?.id}</h1>
                  <textarea
                    cols="30"
                    rows="2"
                    className="border w-full rounded-lg p-2"
                    placeholder={"Write your answer here"}
                    value={answer_data?.answer}
                    onClick={() => setSelectedTextField(answer_data?.id)}
                    onChange={(e) => {
                      setPageData({
                        ...pageData,
                        answers: pageData?.answers?.map((a_data) => {
                          if (a_data?.id === selectedTextField) {
                            return {
                              ...a_data,
                              answer: e?.target?.value,
                            };
                          } else return a_data;
                        }),
                      });
                    }}
                  ></textarea>
                </div>
              );
            })}
          </div>

          <div>
            <button
              onClick={() => {
                axios
                  ?.post(VITE_BASE_LINK + "/readingTestSubmit", {
                    token: localStorage?.getItem("token"),
                    test_id: location?.assignment_id,
                    pageData,
                  })
                  ?.then((res) => {
                    // console.log(res?.data);
                    alert(res?.data?.message);
                    navigate("/user/assestment");
                  });
              }}
              className="w-full rounded-lg bg-black text-white transition-all active:scale-95 py-2 my-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTestScreen;
