import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Services = () => {
  const services = [
    {
      src: "https://epicpadprinting.com/public/img/indus/Automotive.png",
      alt: "Quick Response",
      title: "Quick Response",
    },
    {
      src: "https://epicpadprinting.com/public/img/indus/Tools.png",
      alt: "High Grade Tools",
      title: "High Grade Tools",
    },
    {
      src: "https://epicpadprinting.com/public/img/indus/MEDICAL.png",
      alt: "Health Insurance",
      title: "Health Insurance",
    },
    {
      src: "https://epicpadprinting.com/public/img/indus/Jewelry-coins-and-medallions.png",
      alt: "Affordable Costs",
      title: "Affordable Costs",
    },
    {
      src: "https://epicpadprinting.com/public/img/indus/Electric.png",
      alt: "Professionals",
      title: "Professionals",
    },
    // {
    //   src: "https://epicpadprinting.com/public/img/indus/Mobile.png",
    //   alt: "Computer Perfect",
    //   title: "Computer Perfect",
    // },
    {
      src: "https://epicpadprinting.com/public/img/indus/Promotional.png",
      alt: "24 hour",
      title: "24 hour",
    },
  ];
  return (
    <Container className="py-24 px-4 lg:px-16">
      {/* <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Share a real <Mark>testimonial</Mark>
              that hits some of your benefits from one of your popular customer.
            </p>

            <divvatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Make sure you only pick the <Mark>right sentence</Mark>
              to keep it short and simple.
            </p>

            <divvatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              This is an <Mark>awesome</Mark> landing page template I&apos;ve seen. I
              would use this for anything.
            </p>

            <divvatar
              image={userThreeImg}
              name="Gabrielle Winn"
              title="Co-founder of Acme Inc"
            />
          </div>
        </div>
      </div> */}
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
          {services.map((service, i) => (
            <div
              className="relative group h-48 flex flex-col rounded-xl bg-gray-100 dark:bg-indigo-400 bg-clip-border text-gray-800 shadow-md"
              id={i}
            >
              <div className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-5  group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-primary dark:bg-gray-dark rounded-xl justify-items-center align-middle">
                    <img
                      src={service.src}
                      alt={service.alt}
                      title={service.title}
                      className="w-36 h-36  mt-6 m-auto"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6 z-10 w-full dark:text-white">
                  <p className="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">
                    {service.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Services;
