import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import StudentAssestmentReport from "./StudentAssestmentReport";
import StudentAssestmentTest from "./StudentAssestmentTest";

// // User has switched back to the tab
// const onFocus = () => {
//   console.log("Tab is in focus");
//   //   clearInterval(interval);
// };

// // User has switched away from the tab (AKA tab is hidden)
// const onBlur = () => {
//   let timer = 0;
//   console.log("Tab is blurred");
//   const interval = setInterval(() => {
//     timer = timer + 1;

//     console.log("timer", timer);
//   }, 1000);

//   if (timer > 4) {
//     clearInterval(interval);
//     alert("Its Over");
//   }
// };

// const WindowFocusHandler = () => {
//   useEffect(() => {
//     window.addEventListener("focus", onFocus);
//     window.addEventListener("blur", onBlur);
//     // Calls onFocus when the window first loads
//     onFocus();
//     // Specify how to clean up after this effect:
//     return () => {
//       window.removeEventListener("focus", onFocus);
//       window.removeEventListener("blur", onBlur);
//     };
//   }, []);

//   return <></>;
// };

// export { WindowFocusHandler };

const StudentAssestment = () => {
  const [tabtimer, setTabTimer] = useState(0);
  const [activeAssestmentTab, setActiveAssesstmentTab] = useState("Report");

  //   WindowFocusHandler();
  //   useEffect(() => {
  //     // console.log("######### tabtimer  ##########", tabtimer);
  //   }, [tabtimer]);

  //   // when the user's focus is back to your tab (website) again
  //   window.addEventListener("focus", () => {
  //     // document.title = "Patch Up";
  //   });

  // local variables
  const navigate = useNavigate();
  return (
    <div className="pl-[300px]">
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
              setActiveAssesstmentTab("Report");
            }}
            className={` ${
              activeAssestmentTab === "Report"
                ? "bg-[#ffee58]  text-black"
                : "bg-gray-100"
            } px-5 py-3 rounded-l-lg  w-[150px] text-lg `}
          >
            Report
          </button>
          <div className="h-full w-[5px] "></div>
          <button
            onClick={() => {
              setActiveAssesstmentTab("Test");
            }}
            className={` ${
              activeAssestmentTab === "Test"
                ? "bg-[#ffee58] text-black"
                : "bg-gray-100"
            } px-5 py-3 rounded-r-lg w-[150px] text-lg `}
          >
            Test
          </button>
        </div>
      </div>

      {/* main section */}
      {activeAssestmentTab === "Report" ? (
        <StudentAssestmentReport />
      ) : (
        <StudentAssestmentTest />
      )}
    </div>
  );
};

export default StudentAssestment;
