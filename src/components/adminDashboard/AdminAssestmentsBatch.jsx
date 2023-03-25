import React, { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import axios from "axios";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

const AdminAssestmentsBatch = () => {
  const pageData2 = {
    assestment_batch: [
      {
        batch_id: 1,
        batch_name: "Batch 1",
        total_assignemnts: 5,
        total_students: 56,
      },
      {
        batch_id: 2,
        batch_name: "Batch 2",
        total_assignemnts: 2,
        total_students: 42,
      },
      {
        batch_id: 3,
        batch_name: "Batch 3",
        total_assignemnts: 3,
        total_students: 80,
      },
    ],
  };

  const assigmentModal2 = {
    allAssignmentList: [
      {
        assignment_name: "Assignment 1",
        assignment_id: 1,
      },
      {
        assignment_name: "Assignment 2",
        assignment_id: 2,
      },
      {
        assignment_name: "Assignment 3",
        assignment_id: 3,
      },
    ],

    currentAssignmentList: [
      {
        assignment_name: "Assignment 1",
        assignment_id: 1,
      },
      {
        assignment_name: "Assignment 2",
        assignment_id: 2,
      },
    ],
  };

  const [pageData, setPageData] = useState({});
  const [assigmentModal, setAssigmentModal] = useState({});
  const [assingAssestmentModal, setAssingAssestmentModal] = useState(false);
  const [selectAssestment, setSelectAssestment] = useState(false);
  const [selectedBathId, setSelectedBatchId] = useState();
  const [selectedAssignment, setSelectedAssignment] = useState();

  useEffect(() => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    axios
      ?.post(VITE_BASE_LINK + "/adminAssestmentBatchList", formData)
      .then((res) => {
        setPageData(res?.data);
        // console.log(res?.data);
      });
  }, []);
  return (
    <div>
      <div className="bg-gray-100 p-5 pb-5 my-10 max-w-[700px] mx-auto rounded-xl">
        <div className="flex justify-between items-center">
          {/* search bar */}
          <label
            htmlFor="student_search"
            className="flex items-center bg-white w-full max-w-[400px] rounded-lg px-2"
          >
            <div className="text-gray-500 ">
              <SearchRoundedIcon fontSize="large" />
            </div>
            <input
              id="student_search"
              type="text"
              placeholder="Search"
              className="p-2 rounded-lg w-full outline-none"
            />
          </label>
        </div>

        <div className="bg-gray-50 mt-5 rounded-xl py-2">
          <div
            className="grid grid-cols-4 justify-items-center   my-5
          
          text-sm text-gray-500"
          >
            <div>Batch Name </div>
            <div>Total Assestments</div>
            <div>Total Students</div>
            <div>Action</div>
          </div>

          {pageData?.assestment_batch?.map((data, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-4 items-center  justify-items-center my-5 "
              >
                <div>{data?.batch_name}</div>
                <div>{data?.total_assignemnts} </div>
                <div>{data?.total_students}</div>
                <div>
                  <button
                    className="px-3 py-2 border rounded-lg text-blue-500 border-blue-500 active:scale-95 transition-all hover:bg-blue-500 hover:text-white"
                    onClick={() => {
                      setAssingAssestmentModal(true);
                      setSelectedBatchId(data?.batch_id);

                      const formData = new FormData();
                      formData.append("token", localStorage.getItem("token"));
                      formData.append("batch_id", data?.batch_id);
                      axios
                        ?.post(VITE_BASE_LINK + "/assigmentModalView", formData)
                        .then((res) => {
                          setAssigmentModal(res?.data);
                        });
                    }}
                  >
                    Assign
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* assign assestment modal */}
      {assingAssestmentModal && (
        <div
          onClick={() => {
            setAssingAssestmentModal(false);
            setSelectAssestment(false);
            setSelectedAssignment(null);
          }}
          className="bg-black bg-opacity-20 z-[49]  fixed inset-0"
        ></div>
      )}

      {assingAssestmentModal && (
        <div className="bg-white rounded-lg z-[50]  fixed translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] p-5 min-w-[380px]">
          <div>
            <h1 className="text-lg capitalize mb-5">Assign Assestments</h1>

            <div className="w-full flex items-center  gap-5">
              <div className="relative w-full">
                <button
                  onClick={() => setSelectAssestment(true)}
                  className="flex gap-2 text-gray-500 border p-2 rounded-lg w-full justify-between"
                >
                  <span>
                    {selectedAssignment?.assignment_name
                      ? selectedAssignment?.assignment_name
                      : "Select assestments"}
                  </span>
                  <span>v</span>
                </button>

                {selectAssestment && (
                  <div className="bg-white border rounded-b-lg   z-[52]  absolute top-[100%] left-0 right-0 shadow-xl overflow-hidden h-[200px] overflow-y-scroll">
                    {assigmentModal?.allAssignmentList?.map((data, index) => {
                      return (
                        <button
                          key={index}
                          className="hover:bg-gray-200 w-full text-left p-2 text-sm  "
                          onClick={() => {
                            setSelectAssestment(false);
                            setSelectedAssignment({
                              assignment_name: data?.assignment_name,
                              assignment_id: data?.assignment_id,
                            });
                          }}
                        >
                          <h1 className="">{data?.assignment_name} </h1>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <button
                onClick={async () => {
                  const formData = new FormData();
                  formData.append("token", localStorage.getItem("token"));
                  formData.append("batch_id", selectedBathId);
                  formData.append(
                    "assignment_id",
                    selectedAssignment?.assignment_id
                  );
                  await axios
                    ?.post(VITE_BASE_LINK + "/addAssignmentToBatch", formData)
                    .then((res) => {
                      alert(res?.data?.message);
                    });

                  await axios
                    ?.post(
                      VITE_BASE_LINK + "/adminAssestmentBatchList",
                      formData
                    )
                    .then((res) => {
                      setPageData(res?.data);
                      // console.log(res?.data);
                    });
                }}
                className=" px-3 py-2 border rounded-lg  border-black active:scale-95 transition-all bg-black text-white"
              >
                <h1 className="w-max"> + Add</h1>
              </button>
            </div>

            {/* current assestment */}
            <div className="mt-5">
              <h1 className="text-gray-600 text-sm">Current assignments</h1>

              {/* assignment list */}
              {assigmentModal?.currentAssignmentList?.length > 0 ? (
                <div className="h-[150px]  ">
                  {assigmentModal?.currentAssignmentList?.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="py-2 text-sm items-center flex gap-2"
                      >
                        <div>{index + 1}.</div>
                        <h1>{data?.assignment_name}</h1>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="h-[150px] text-gray-400 text-sm flex justify-center items-center">
                  No assestment assigned yet
                </div>
              )}
            </div>

            {/* select assestment dropdown and overlay */}

            {selectAssestment && (
              <div
                onClick={() => setSelectAssestment(false)}
                className=" z-[51]  fixed inset-0"
              ></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAssestmentsBatch;
