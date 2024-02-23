import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const ContactUs = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl lg:w-7/12 xl:w-8/12">
        <div
          className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
          data-wow-delay=".15s
              "
        >
          <form>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Enter your Message"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  ></textarea>
                </div>
              </div>
              <div className="w-full flex justify-center px-4">
                <button className="shadow-[0px 5px 20px rgba(4, 10, 34, 0.1)] dark:shadow-[0px 5px 20px rgba(4, 10, 34, 0.1)] rounded-md bg-[#4A6CF7] px-9 py-4 text-base font-medium text-white duration-300 transition-transform hover:-translate-y-1 hover:shadow-lg">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

const contactUsdata = [
  {
    question: "Is this template completely free to use?",
    answer: "Yes, this template is completely free to use.",
  },
  {
    question: "Can I use it in a commercial project?",
    answer: "Yes, this you can.",
  },
  {
    question: "What is your refund policy? ",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
];

export default ContactUs;
