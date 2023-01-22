import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// assets
import logo from "../assets/header/logo.png";
import { VITE_BASE_LINK } from "../base_link/BaseLink";

const SignUp = () => {
  // local variables
  const [errorText, setErrorText] = useState(null);
  const navigate = useNavigate();

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

  //   Sign up function
  const signUpHandler = (e) => {
    e.preventDefault();
    // let formData = new FormData();
    // formData.append("email", emailRef?.current?.value);
    // formData.append("password", passwordRef?.current?.value);
    setErrorText(null);

    if (
      emailRef?.current?.value?.length > 0 &&
      passwordRef?.current?.value?.length > 0 &&
      confirmPasswordRef?.current?.value?.length > 0 &&
      firstNameRef?.current?.value?.length > 0 &&
      lastNameRef?.current?.value?.length > 0 &&
      phoneCodeRef?.current?.value?.length > 0 &&
      phoneNumberRef?.current?.value?.length > 0 &&
      genderRef?.current?.value?.length > 0 &&
      ageRef?.current?.value?.length > 0
    ) {
      const userCredentials = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
        phone_code: phoneCodeRef.current.value,
        phone_no: phoneNumberRef.current.value,
        age: ageRef.current.value,
        gender: genderRef.current.value,
      };

      axios({
        method: "post",
        url: VITE_BASE_LINK + "/userSignUp",
        data: userCredentials,
      })
        .then(function (response) {
          console.log("signup response:", response?.data);
          navigate("/sign_in");
        })
        .catch(function (error) {
          if (error?.response?.data?.error) {
            setErrorText(error?.response?.data?.error);
          } else {
            setErrorText("Something went wrong! Please try again.");
          }
        });
    } else {
      setErrorText("Please fill all the fields.");
    }
  };

  return (
    <div className="course-animated-bg bg-fixed  absolute inset-0 h-[100vh]  flex justify-center items-center t ">
      <div className="p-5 bg-white rounded-lg">
        <div className="mb-10 bg-black py-5 rounded-t-md">
          <img src={logo} alt="language squire" className="w-[200px] mx-auto" />
        </div>

        <form onSubmit={signUpHandler} className="max-w-full w-[450px]">
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

          {errorText && (
            <p className="min-h-[20px] mb-5  text-sm text-red-500 ">
              {errorText}
            </p>
          )}

          <button
            type="submit"
            className="w-full p-3 font-semibold   border border-[#FFDF58] hover:bg-yellow-400 bg-[#FFDF58] text-black rounded-md transition-all active:scale-95"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
