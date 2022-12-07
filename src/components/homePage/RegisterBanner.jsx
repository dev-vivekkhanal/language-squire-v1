import React from "react";

const RegisterBanner = () => {
  return (
    <section className="bg-[#1e1e1e] text-[#f1f1f1] py-24 ">
      <div className="w-[95%] md:w-[85%] mx-auto flex flex-col gap-10 justify-between items-start sm:items-center ">
        <div className="space-y-5">
          <h1 className="text-2xl md:text-3xl  xl:text-4xl font-semibold ">
            Prepare with us and strengthen your core.
          </h1>
        </div>

        <div className=" ">
          <button className=" px-15 md:px-16 yellow-gradient text-[#1e1e1e] rounded-lg p-4 md:p-5 font-semibold text-base md:text-lg lg:text-2xl transition-all active:scale-95">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegisterBanner;
