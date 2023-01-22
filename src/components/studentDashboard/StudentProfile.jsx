import axios from "axios";
import React, { useEffect, useRef } from "react";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

const StudentProfile = () => {
  // page data fro api
  useEffect(() => {
    const formData = new FormData();
    formData?.append("token", localStorage?.getItem("token"));
    axios.post(VITE_BASE_LINK + "/userProfile", formData)?.then((res) => {
      console.log("response of profile", res?.data);
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

  const updateProfileDetails = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pl-[300px]">
      <h1>Student Profile</h1>
      <form
        onSubmit={updateProfileDetails}
        className="max-w-full w-[450px] p-5"
      >
        <div className="flex gap-5 mb-5">
          <input
            ref={firstNameRef}
            type="text"
            placeholder="First Name"
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
          />
          <input
            ref={lastNameRef}
            type="text"
            placeholder="Last Name"
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
          />
        </div>
        <input
          ref={emailRef}
          type="text"
          placeholder="Email"
          className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full mb-5"
        />

        <div className="flex gap-5 mb-5">
          <input
            ref={phoneCodeRef}
            type="text"
            placeholder="+91"
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-[100px] "
          />
          <input
            ref={phoneNumberRef}
            type="number"
            placeholder="Phone Number"
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
          />
        </div>

        <div className="flex gap-5 mb-5">
          <input
            ref={ageRef}
            type="number"
            placeholder="Age"
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
          />
          <input
            ref={genderRef}
            type="text"
            placeholder="Gender"
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
          />
        </div>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="block outline-none border-0 my-5 mb-7 border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
        />
        <input
          ref={confirmPasswordRef}
          type="password"
          placeholder="Confirm Password"
          className="block outline-none border-0 my-5 mb-7 border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
        />

        {/* {errorText && (
          <p className="min-h-[20px] mb-5  text-sm text-red-500 ">
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
