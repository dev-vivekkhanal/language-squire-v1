import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const AdminUsersStudents = () => {
  const pageData = [
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
            <div className="flex-1">Roll Number</div>
            <div className="flex-1">Enrolled</div>
            <div className="flex-1">First Name</div>
            <div className="flex-1">Last name</div>
            <div className="flex-1">Email</div>
            <div className="flex-1">Batch</div>
          </div>
          <div className="h-[60vh] overflow-y-scroll">
            {pageData?.map((data, index) => {
              return (
                <div key={data?.id} className="py-5">
                  <div className="flex flex-wrap items-center gap-5">
                    <div className="flex-1">{index + 1}</div>

                    <div className="flex-1">{data?.roll_no}</div>
                    <div className="flex-1">{data?.enrolled}</div>
                    <div className="flex-1">{data?.f_name}</div>
                    <div className="flex-1">{data?.l_name}</div>
                    <div className="flex-1">{data?.email}</div>
                    <div className="flex-1">{data?.batch}</div>
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
