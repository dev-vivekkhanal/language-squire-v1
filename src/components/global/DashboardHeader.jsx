import React from "react";
// assets
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const DashboardHeader = () => {
  const headerData = {
    first_name: "Vivek",
  };
  return (
    <div className="p-5 pt-10 flex justify-between items-start ">
      <div>
        <h1 className="text-xl font-semibold font-nanum">
          Hi {headerData?.first_name}, Good Morning
        </h1>
        <h2 className="text-[#000000bb] text-sm">Jan 02, Monday</h2>
      </div>

      <div
        title="Logout"
        className="bg-[#FFDF58] p-2 rounded-full flex justify-center items-center hover:bg-black group transition-all cursor-pointer active:scale-95 duration-300"
      >
        <LogoutRoundedIcon
          fontSize="medium"
          className="group-hover:text-[#FFDF58] transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
