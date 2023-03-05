import React, { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import axios from "axios";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

const AdminUsersStudents = () => {
  const pageData2 = [
    {
      id: 1,
      roll_no: 202201,
      enrolled: "1675045592",
      f_name: "Vivek",
      l_name: "Khanal",
      email: "vivek247@gmail.com",
      batch: "Batch 2",
    },

    {
      id: 2,
      roll_no: 202202,
      enrolled: "1675045624",
      f_name: "Aayan",
      l_name: "Bhuyan",
      email: "aayan.b@gmail.com",
      batch: "Batch 1",
    },

    {
      id: 3,
      roll_no: 202201,
      enrolled: "1675045592",
      f_name: "Vivek",
      l_name: "Khanal",
      email: "vivek247@gmail.com",
      batch: "Batch 2",
    },

    {
      id: 4,
      roll_no: 202202,
      enrolled: "1675045624",
      f_name: "Aayan",
      l_name: "Bhuyan",
      email: "aayan.b@gmail.com",
      batch: "Batch 1",
    },

    {
      id: 5,
      roll_no: 202201,
      enrolled: "1675045592",
      f_name: "Vivek",
      l_name: "Khanal",
      email: "vivek247@gmail.com",
      batch: "Batch 2",
    },

    {
      id: 6,
      roll_no: 202202,
      enrolled: "1675045624",
      f_name: "Aayan",
      l_name: "Bhuyan",
      email: "aayan.b@gmail.com",
      batch: "Batch 1",
    },

    {
      id: 7,
      roll_no: 202201,
      enrolled: "1675045592",
      f_name: "Vivek",
      l_name: "Khanal",
      email: "vivek247@gmail.com",
      batch: "Batch 2",
    },

    {
      id: 8,
      roll_no: 202202,
      enrolled: "1675045624",
      f_name: "Aayan",
      l_name: "Bhuyan",
      email: "aayan.b@gmail.com",
      batch: "Batch 1",
    },
  ];
  const [pageData, setPageData] = useState();
  const [batchList, setBatchList] = useState();

  const [editOverlayStatus, setEditOverlayStatus] = useState(false);
  const [batchOverlayStatus, setBatchOverlayStatus] = useState(false);

  const [selectedBatch, setSelectedBatch] = useState({
    batch_id: null,
    batch_name: null,
  });

  useEffect(() => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    axios.post(VITE_BASE_LINK + "/adminStudentList", formData)?.then((res) => {
      setPageData(res);
    });

    axios?.post(VITE_BASE_LINK + "/adminBatchList", formData).then((res) => {
      console.log("batch lIst", res?.data);
      setBatchList(res?.data);
    });
  }, []);

  useEffect(() => {
    console.log("pageData", pageData);
  }, [pageData]);

  return (
    <div className="p-5">
      <div className="bg-gray-100 rounded-lg p-5">
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

          {/* add  */}
          <div>
            <button className="bg-[#ffee58] flex items-center p-3 rounded-lg gap-3 active:scale-95 transition-all">
              <AddRoundedIcon className="text-gray-800 " />

              <span className="">Add Students</span>
            </button>
          </div>
        </div>

        <div className="p-5 bg-gray-50 mt-5 rounded-lg">
          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 pb-2 border-b mb-2">
            <div className="flex-1">Sl No.</div>
            {/* <div className="flex-1">Roll Number</div> */}
            <div className="flex-1">Enrolled Date</div>
            <div className="flex-1">Enrolled Time</div>
            <div className="flex-1">First Name</div>
            <div className="flex-1">Last name</div>
            <div className="flex-1">Email</div>
            <div className="flex-1">Batch</div>
            <div className="flex-1">Action</div>
          </div>
          <div className="h-[60vh] overflow-y-scroll">
            {pageData?.data?.map((data) => {
              return (
                <div key={data?.id} className="py-5">
                  <div className="flex flex-wrap items-center gap-5">
                    <div className="flex-1">{data?.id}</div>
                    {/* <div className="flex-1">{data?.roll_no}</div> */}
                    <div className="flex-1">{data?.enrolled_date}</div>
                    <div className="flex-1">{data?.enrolled_time}</div>
                    <div className="flex-1">{data?.f_name}</div>
                    <div className="flex-1">{data?.l_name}</div>
                    <div className="flex-1">{data?.email}</div>
                    <div className="flex-1">{data?.batch}</div>
                    <div className="flex-1 flex gap-2 items-center">
                      <button
                        onClick={() => {
                          setEditOverlayStatus(data?.id);
                          setSelectedBatch({
                            batch_id: data?.batch_id,
                            batch_name: data?.batch,
                          });
                        }}
                        className="px-3 py-2 border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white transition-all rounded-lg active:scale-95"
                      >
                        Edit
                      </button>
                      <button className="px-3 py-2 border-red-500 border text-red-500 hover:bg-red-500 hover:text-white transition-all rounded-lg active:scale-95">
                        Delete
                      </button>

                      {/* edit overlay */}
                      {editOverlayStatus === data?.id && (
                        <>
                          <div
                            onClick={() => setEditOverlayStatus(false)}
                            className="bg-black bg-opacity-20 fixed inset-0 z-50"
                          ></div>

                          <div className="fixed translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] p-5 rounded-lg bg-white z-[55]">
                            <div className="flex justify-between items-center">
                              <h1 className="text-xl mb-5">Change Batch</h1>
                              {/* <h1>x</h1> */}
                            </div>
                            <div className="grid-cols-3 grid gap-5 w-full">
                              <div className="space-y-2 border p-2 rounded-lg">
                                <h2 className="text-gray-500 text-sm">Sl.No</h2>
                                <h1>{data?.id}</h1>
                              </div>
                              <div className="space-y-2 border p-2 rounded-lg">
                                <h2 className="text-gray-500 text-sm">
                                  Enrolled Date
                                </h2>
                                <h1>{data?.enrolled_date}</h1>
                              </div>
                              <div className="space-y-2 border p-2 rounded-lg">
                                <h2 className="text-gray-500 text-sm">
                                  Enrolled Time
                                </h2>
                                <h1> {data?.enrolled_time}</h1>
                              </div>
                              <div className="space-y-2 border p-2 rounded-lg">
                                <h2 className="text-gray-500 text-sm">Name</h2>
                                <h1>
                                  {" "}
                                  {data?.f_name} {data?.l_name}
                                </h1>
                              </div>

                              <div className="space-y-2 border p-2 rounded-lg">
                                <h2 className="text-gray-500 text-sm">Email</h2>
                                <h1>{data?.email}</h1>
                              </div>
                              <div className="space-y-2 border  rounded-lg">
                                <h2 className="text-gray-500 text-sm p-2 pb-0">
                                  Batch
                                </h2>
                                <div className=" relative  ">
                                  <div
                                    className="px-2 pb-2 flex justify-between items-center cursor-pointer  "
                                    onClick={() => {
                                      setBatchOverlayStatus(data?.id);
                                    }}
                                  >
                                    <h1>{selectedBatch?.batch_name}</h1>
                                    <h2>v</h2>
                                  </div>

                                  {batchOverlayStatus && (
                                    <div
                                      className=" fixed inset-0 0 z-50"
                                      onClick={() =>
                                        setBatchOverlayStatus(false)
                                      }
                                    ></div>
                                  )}

                                  {batchOverlayStatus === data?.id && (
                                    <div className="absolute top-[110%] rounded-b-lg  left-0 right-0 bg-white z-[55]  border shadow-2xl min-h-[150px]">
                                      {batchList?.map((b_data, b_index) => {
                                        return (
                                          <div
                                            key={b_index}
                                            className="border-b text-sm hover:bg-gray-100 transition-all cursor-pointer p-2"
                                            onClick={() => {
                                              setSelectedBatch({
                                                batch_id: b_data?.batch_id,
                                                batch_name: b_data?.batch_name,
                                              });
                                            }}
                                          >
                                            {b_data?.batch_name}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div>
                              <button
                                onClick={async () => {
                                  const formData = new FormData();
                                  formData.append(
                                    "token",
                                    localStorage?.getItem("token")
                                  );
                                  formData.append("student_id", data?.id);
                                  formData.append(
                                    "batch_id",
                                    selectedBatch?.batch_id
                                  );

                                  await axios
                                    .post(
                                      VITE_BASE_LINK + "/adminUpdateBatch",
                                      formData
                                    )
                                    ?.then((res) => {
                                      console.log("res", res?.data);
                                    });

                                  await axios
                                    .post(
                                      VITE_BASE_LINK + "/adminStudentList",
                                      formData
                                    )
                                    ?.then((res) => {
                                      setPageData(res);
                                    });
                                }}
                                className="border bg-blue-500 text-white active:scale-95 transition-all rounded-lg px-3 py-2 w-full mt-5"
                              >
                                Update Batch
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersStudents;
