import React, { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import axios from "axios";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

const AdminUsersBatch = () => {
  const pageData2 = [
    {
      batch_id: 1,
      batch_name: "Batch 1",
      created: 1675045592,
      total_students: 56,
    },
    {
      batch_id: 2,
      batch_name: "Batch 2",
      created: 1675045592,
      total_students: 42,
    },
    {
      batch_id: 3,
      batch_name: "Batch 3",
      created: 1675045592,
      total_students: 80,
    },
  ];

  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    axios?.post(VITE_BASE_LINK + "/adminBatchList", formData).then((res) => {
      setPageData(res?.data);
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

          {/* add  */}
          <div>
            <button
              onClick={async () => {
                const formData = new FormData();
                formData.append("token", localStorage?.getItem("token"));
                await axios
                  .post(VITE_BASE_LINK + "/adminCreateBatch", formData)
                  ?.then((res) => {
                    console.log("res.data", res);
                  });

                await axios
                  .post(VITE_BASE_LINK + "/adminBatchList", formData)
                  ?.then((res) => {
                    setPageData(res?.data);
                  });
              }}
              className="bg-[#ffee58] flex items-center p-3 rounded-lg gap-3 active:scale-95 transition-all"
            >
              <AddRoundedIcon className="text-gray-800 " />

              <span className="">Add Batch</span>
            </button>
          </div>
        </div>
        <div className="bg-gray-50 mt-5 rounded-xl py-2">
          <div
            className="grid grid-cols-5 justify-items-center   my-5
          
          text-sm text-gray-500"
          >
            <div>Batch Name </div>
            <div>Date</div>
            <div>Time</div>
            <div>Total Students</div>
            <div>Action</div>
          </div>
          {pageData?.map((data, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-5 items-center  justify-items-center my-5 "
              >
                <div>{data?.batch_name}</div>
                <div>{data?.created_date}</div>
                <div>{data?.created_time}</div>
                <div>{data?.total_students}</div>
                <div>
                  <button
                    className="px-3 py-2 border rounded-lg text-red-500 border-red-500 active:scale-95 transition-all hover:bg-red-500 hover:text-white"
                    onClick={async () => {
                      const formData = new FormData();
                      formData.append("token", localStorage?.getItem("token"));
                      formData.append("batch_id", data?.batch_id);
                      await axios
                        ?.post(VITE_BASE_LINK + "/adminDeleteBatch", formData)
                        ?.then((res) => {
                          console.log("res", res?.data);
                        });
                      await axios
                        .post(VITE_BASE_LINK + "/adminBatchList", formData)
                        ?.then((res) => {
                          setPageData(res?.data);
                        });
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminUsersBatch;
