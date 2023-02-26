import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const AdminUsersBatch = () => {
  const pageData = [
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
            <button className="bg-[#ffee58] flex items-center p-3 rounded-lg gap-3 active:scale-95 transition-all">
              <AddRoundedIcon className="text-gray-800 " />

              <span className="">Add Batch</span>
            </button>
          </div>
        </div>
        <div className="bg-gray-50 mt-5 rounded-xl py-2">
          <div
            className="grid grid-cols-3 justify-items-center   my-5
          
          text-sm text-gray-500"
          >
            <div>Batch Name </div>
            <div>Created</div>
            <div>Total Students</div>
          </div>
          {pageData?.map((data, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-3  justify-items-center my-5 "
              >
                <div>{data?.batch_name}</div>
                <div>{data?.created}</div>
                <div>{data?.total_students}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminUsersBatch;
