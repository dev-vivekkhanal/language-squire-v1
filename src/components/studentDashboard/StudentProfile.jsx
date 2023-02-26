import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useNavigate } from "react-router-dom";
import { sidebarDataAtom } from "../../recoil/sidebar/sidebarDataAtom";
import { useRecoilState } from "recoil";

const StudentProfile = () => {
  // global variables
  const [sidebarData, setSidebarData] = useRecoilState(sidebarDataAtom);

  // local variables
  const navigate = useNavigate();
  const [pageData, setPageData] = useState({
    age: "",
    email: "",
    first_name: "",
    gender: "",
    last_name: "",
    message: "",
    phone_code: "",
    phone_no: "",
    status: "",
    user_id: "",
  });

  // page data fro api
  useEffect(() => {
    const formData = new FormData();
    formData?.append("token", localStorage?.getItem("token"));
    axios.post(VITE_BASE_LINK + "/userProfile", formData)?.then((res) => {
      setPageData(res?.data);
    });
  }, []);

  // refs
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneCodeRef = useRef();
  const phoneNumberRef = useRef();
  const genderRef = useRef();
  const ageRef = useRef();

  const updateProfileDetails = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData?.append("token", localStorage?.getItem("token"));

    const submitCall = await axios
      .put(VITE_BASE_LINK + "/userProfile", { pageData })
      ?.then((res) => {
        console.log("######## RESPONSE OF UPDATE CALL ############", res?.data);

        alert(res?.data?.message);
      });

    const sidebarDataCall = await axios
      .post(VITE_BASE_LINK + "/sideBar", formData)
      ?.then((res) => {
        console.log("####### SIDEBAR DATA #######", res?.data);
        setSidebarData({
          ...sidebarData,
          user_details: res?.data?.user_details,
        });
      });
  };

  return (
    <div className="pl-[300px]">
      <div className="p-5 pt-10 flex justify-between items-start ">
        <div>
          <h1 className="text-xl font-semibold font-nanum capitalize">
            Profile
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
      <form
        onSubmit={updateProfileDetails}
        className="w-full max-w-[600px] mx-auto p-5"
      >
        <div className="flex gap-10 mb-10">
          <input
            ref={firstNameRef}
            type="text"
            placeholder="First Name"
            value={pageData?.first_name}
            onChange={(e) => {
              setPageData({
                ...pageData,
                first_name: e?.target?.value,
              });
            }}
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
          />
          <input
            ref={lastNameRef}
            type="text"
            placeholder="Last Name"
            value={pageData?.last_name}
            onChange={(e) => {
              setPageData({
                ...pageData,
                last_name: e?.target?.value,
              });
            }}
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
          />
        </div>
        <input
          ref={emailRef}
          type="text"
          placeholder="Email"
          value={pageData?.email}
          onChange={(e) => {
            setPageData({
              ...pageData,
              email: e?.target?.value,
            });
          }}
          className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full mb-10"
        />

        <div className="flex gap-10 mb-10">
          <input
            ref={phoneCodeRef}
            type="text"
            placeholder="+91"
            value={pageData?.phone_code}
            onChange={(e) => {
              setPageData({
                ...pageData,
                phone_code: e?.target?.value,
              });
            }}
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-[100px] "
          />
          <input
            ref={phoneNumberRef}
            type="number"
            placeholder="Phone Number"
            value={pageData?.phone_no}
            onChange={(e) => {
              setPageData({
                ...pageData,
                phone_no: e?.target?.value,
              });
            }}
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
          />
        </div>

        <div className="flex gap-10 mb-10">
          <input
            ref={ageRef}
            type="number"
            placeholder="Age"
            value={pageData?.age}
            onChange={(e) => {
              setPageData({
                ...pageData,
                age: e?.target?.value,
              });
            }}
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
          />
          <input
            ref={genderRef}
            type="text"
            placeholder="Gender"
            value={pageData?.gender}
            onChange={(e) => {
              setPageData({
                ...pageData,
                gender: e?.target?.value,
              });
            }}
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
          />
        </div>

        {/* {errorText && (
          <p className="min-h-[20px] mb-10  text-sm text-red-500 ">
            {errorText}
          </p>
        )} */}

        <button
          type="submit"
          className="w-full p-3 font-semibold   border border-[#FFDF58] hover:bg-yellow-400 bg-[#FFDF58] text-black rounded-md transition-all active:scale-95"
        >
          Update Changes
        </button>
      </form>
    </div>
  );
};

export default StudentProfile;
