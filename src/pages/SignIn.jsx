import React, { useRef, useState } from "react";
// assets
import logo from "../assets/header/logo.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { VITE_BASE_LINK } from "../base_link/BaseLink";

const SignIn = () => {
  // refs
  const emailRef = useRef();
  const passwordRef = useRef();

  // local variables
  const [errorText, setErrorText] = useState(null);
  const navigate = useNavigate();

  //   login function
  const signInHandler = (e) => {
    e.preventDefault();
    setErrorText(null);

    const userCredentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (
      emailRef?.current?.value?.length > 0 &&
      passwordRef?.current?.value?.length > 0
    ) {
      axios({
        method: "post",
        url: VITE_BASE_LINK + "/userSignIn",
        data: userCredentials,
      })
        .then(function (response) {
          //   console.log("response:", response?.data);
          navigate("/dashboard");
        })
        .catch(function (error) {
          console.log("error:", error);
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

        <form onSubmit={signInHandler} className="max-w-full w-[350px]">
          <input
            ref={emailRef}
            type="text"
            placeholder="Email"
            className="block outline-none border-0  border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="block outline-none border-0 my-5 mb-7 border-b-2  py-1 focus:border-b-[#FFDF58] transition-all rounded-sm w-full "
          />

          {errorText && (
            <p className="min-h-[20px] mb-5  text-sm text-red-500 ">
              {errorText}
            </p>
          )}

          <button className="w-full p-3 font-semibold active:scale-95   border border-[#FFDF58] hover:bg-yellow-400 bg-[#FFDF58] text-black rounded-md transition-all">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
