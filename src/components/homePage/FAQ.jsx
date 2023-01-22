import React, { useState } from "react";

// assets
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import faqImage from "../../assets/landingPage/faq/question_mark.svg";

const FAQ = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const pageData = [
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, harum?",
      answer:
        " Provident iusto voluptatum et in optio a atque consequuntur cum neque ea voluptates delectus, molestias placeat aut porro impedit quisquam aliquam ipsam.",
    },

    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, harum?",
      answer:
        " Provident iusto voluptatum et in optio a atque consequuntur cum neque ea voluptates delectus, molestias placeat aut porro impedit quisquam aliquam ipsam.",
    },

    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, harum?",
      answer:
        " Provident iusto voluptatum et in optio a atque consequuntur cum neque ea voluptates delectus, molestias placeat aut porro impedit quisquam aliquam ipsam.",
    },

    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, harum?",
      answer:
        " Provident iusto voluptatum et in optio a atque consequuntur cum neque ea voluptates delectus, molestias placeat aut porro impedit quisquam aliquam ipsam.",
    },

    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, harum?",
      answer:
        " Provident iusto voluptatum et in optio a atque consequuntur cum neque ea voluptates delectus, molestias placeat aut porro impedit quisquam aliquam ipsam.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, harum?",
      answer:
        " Provident iusto voluptatum et in optio a atque consequuntur cum neque ea voluptates delectus, molestias placeat aut porro impedit quisquam aliquam ipsam.",
    },
  ];
  return (
    <section className="bg-[#1e1e1e] text-[#f1f1f1]  py-32">
      <div className="w-[95%] md:w-[85%] mx-auto">
        <h1 className=" text-3xl md:text-4xl  xl:text-5xl">
          Frequently Asked Questions
        </h1>

        <div className=" mt-10 flex gap-5 ">
          <div className="flex-1 ">
            {pageData?.map((data, index) => {
              return (
                <div
                  key={index}
                  className={` bg-[#f1f1f1]  text-[#1e1e1e]  p-5 my-5 rounded-lg border-l-[#ffdf58] border-l-[10px] cursor-pointer`}
                  onClick={() => {
                    selectedFAQ === index
                      ? setSelectedFAQ(null)
                      : setSelectedFAQ(index);
                  }}
                >
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg  font-semibold ">
                      {data?.question}
                    </h1>

                    <div
                      className={` ${
                        selectedFAQ === index ? "-rotate-180" : "rotate-0"
                      } transition-all duration-200 `}
                    >
                      <KeyboardArrowDownRoundedIcon fontSize="medium" />
                    </div>
                  </div>
                  <p
                    className={`  ${
                      selectedFAQ === index ? "text-md  pt-2  " : " max-h-[0]"
                    } h-full  transition-all  duration-200 overflow-hidden `}
                  >
                    {data?.answer}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex-1  hidden lg:flex items-center justify-center">
            <img src={faqImage} alt="faq" className="w-[50%] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
