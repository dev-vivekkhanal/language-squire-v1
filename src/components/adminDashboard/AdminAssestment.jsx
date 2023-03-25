import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AdminAssestmentsBatch from "./AdminAssestmentsBatch";

const AdminAssestment = () => {
  // local variables
  const navigate = useNavigate();
  const [activeAdminUserTab, setActiveAdminUserTab] = useState("Students");
  return (
    <div className="pl-[300px]">
      <div>
        <div className="p-5 pt-10 flex justify-between items-start ">
          <div>
            <h1 className="text-xl font-semibold font-nanum capitalize">
              Assestment
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

        {/* tab selection */}
        <div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                setActiveAdminUserTab("Students");
              }}
              className={` ${
                activeAdminUserTab === "Students"
                  ? "bg-[#ffee58]  text-black"
                  : "bg-gray-100"
              } px-5 py-3 rounded-l-lg  w-[150px] text-lg `}
            >
              Students
            </button>
            <div className="h-full w-[5px] "></div>
            <button
              onClick={() => {
                setActiveAdminUserTab("Batch");
              }}
              className={` ${
                activeAdminUserTab === "Batch"
                  ? "bg-[#ffee58] text-black"
                  : "bg-gray-100"
              } px-5 py-3 rounded-r-lg w-[150px] text-lg `}
            >
              Batch
            </button>
          </div>
        </div>

        {/* main section */}
        {activeAdminUserTab === "Students" ? (
          "students"
        ) : (
          <AdminAssestmentsBatch />
        )}
      </div>
    </div>
  );
};

export default AdminAssestment;
