import React, { useState } from "react";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { useEffect } from "react";
import axios from "axios";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";
const StudentAssestmentReport = () => {
  // local variables
  const [selectedCard, setSelecetdCard] = useState({
    test_name: null,
    card_id: null,
  });

  const [reportData, setReportData] = useState([]);
  const reportData2 = [
    {
      test_name: "Mock Test 1",

      sections: [
        {
          id: 1,
          name: "Listening",
          value: 5,
          out_of: 40,
        },
        {
          id: 2,
          name: "Reading",
          value: 8,
          out_of: 40,
        },
        {
          id: 3,
          name: "Writing",
          value: 2,
          out_of: 9,
          remarks: [
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quam laborum quasi, temporibus consequatur illo magni enim officiis inventore quisquam? Ut quod recusandae voluptatibus dolores voluptates hic! Earum repellendus nesciunt a odit autem architecto unde corrupti suscipit vitae aut explicabo, deserunt quos laudantium laboriosam facere magni nihil veniam neque voluptatibus.",
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quam laborum quasi, temporibus consequatur illo magni enim officiis inventore quisquam? Ut quod recusandae voluptatibus dolores voluptates hic! Earum repellendus nesciunt a odit autem architecto unde corrupti suscipit vitae aut explicabo, deserunt quos laudantium laboriosam facere magni nihil veniam neque voluptatibus.2",
          ],
        },
        {
          id: 4,
          name: "Speaking",
          value: 5,
          out_of: 40,
          remarks: [
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quam laborum quasi, temporibus consequatur illo magni enim officiis inventore quisquam? Ut quod recusandae voluptatibus dolores voluptates hic! Earum repellendus nesciunt a odit autem architecto unde corrupti suscipit vitae aut explicabo, deserunt quos laudantium laboriosam facere magni nihil veniam neque voluptatibus.",
          ],
        },
      ],
    },

    {
      test_name: "Mock Test 2",

      sections: [
        {
          id: 1,
          name: "Listening",
          value: 6,
          out_of: 40,
        },
        {
          id: 2,
          name: "Reading",
          value: 9,
          out_of: 40,
        },
        {
          id: 3,
          name: "Writing",
          value: 3,
          out_of: 9,
          remarks: [
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quam laborum quasi, temporibus consequatur illo magni enim officiis inventore quisquam? Ut quod recusandae voluptatibus dolores voluptates hic! Earum repellendus nesciunt a odit autem architecto unde corrupti suscipit vitae aut explicabo, deserunt quos laudantium laboriosam facere magni nihil veniam neque voluptatibus.3",
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quam laborum quasi, temporibus consequatur illo magni enim officiis inventore quisquam? Ut quod recusandae voluptatibus dolores voluptates hic! Earum repellendus nesciunt a odit autem architecto unde corrupti suscipit vitae aut explicabo, deserunt quos laudantium laboriosam facere magni nihil veniam neque voluptatibus.4",
          ],
        },
        {
          id: 4,
          name: "Speaking",
          value: 6,
          out_of: 40,
          remarks: [
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quam laborum quasi, temporibus consequatur illo magni enim officiis inventore quisquam? Ut quod recusandae voluptatibus dolores voluptates hic! Earum repellendus nesciunt a odit autem architecto unde corrupti suscipit vitae aut explicabo, deserunt quos laudantium laboriosam facere magni nihil veniam neque voluptatibus.",
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    let formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    axios.post(VITE_BASE_LINK + "/studentReportView", formData)?.then((res) => {
      setReportData(res?.data);
    });
  }, []);

  return (
    <div className="p-5">
      {reportData?.map((data, index) => {
        return (
          <div key={index} className="p-5 rounded-lg mb-10 bg-gray-50">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl">{data?.test}</h1>

              {!data?.check_status && (
                <div className="flex gap-2 items-center">
                  <div className="w-[15px] aspect-square rounded-full bg-yellow-400 transition-all animate-pulse"></div>
                  <h1 className="text-gray-500">Evaluation in process</h1>
                </div>
              )}
            </div>

            {data?.check_status && (
              <div className="flex flex-wrap gap-5 justify-between items-center mt-5">
                {data?.section?.map((section_data, section_index) => {
                  return (
                    <div
                      key={section_index}
                      className="bg-white rounded-lg p-5 flex-1"
                    >
                      <div className="flex justify-center items-start gap-5">
                        <h2 className="text-lg text-center text-gray-500">
                          {section_data?.name}
                        </h2>
                        {section_data?.remarks && (
                          <>
                            <button
                              onClick={() => {
                                setSelecetdCard({
                                  test_name: data?.test_name,
                                  card_id: section_data?.id,
                                });
                              }}
                              className="text-gray-700"
                            >
                              <InfoRoundedIcon />
                            </button>

                            {selectedCard?.test_name === data?.test_name &&
                              selectedCard?.card_id === section_data?.id && (
                                <>
                                  <div
                                    className="inset-0 fixed bg-black bg-opacity-20 z-[50]"
                                    onClick={() => {
                                      setSelecetdCard({
                                        test_name: null,
                                        card_id: null,
                                      });
                                    }}
                                  ></div>

                                  <div className="ml-[190px] bg-white p-5 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[55] rounded-lg">
                                    <h1 className="text-center mb-5 text-xl font-semibold">
                                      Remarks
                                    </h1>
                                    {section_data?.remarks?.map(
                                      (remark_data, remark_index) => {
                                        return (
                                          <div className="border rounded-lg p-5 mb-5">
                                            <h2 className="text-lg text-gray-500 mb-2">
                                              Question {remark_index + 1}
                                            </h2>
                                            <p key={remark_index}>
                                              {remark_data}
                                            </p>
                                          </div>
                                        );
                                      }
                                    )}
                                  </div>
                                </>
                              )}
                          </>
                        )}
                      </div>

                      <div className="flex justify-center items-end">
                        <h1 className="text-3xl text-center mt-5 font-medium text-gray-600">
                          {section_data?.value}
                        </h1>

                        <span className="text-gray-500 tex-sm">
                          /{section_data?.out_of}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StudentAssestmentReport;
