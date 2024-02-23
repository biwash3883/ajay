import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.jpg";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap" id="hero">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              LEADING INDUSTRY EXPERTS IN ROOFING SERVICES
            </h1>
            <div className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              We have over 20 years of experience working with home owners,
              builders and businesses to provide expert solutions for any
              roofing or guttering issue you may have. Call us for free roof
              inspection today!
              <ul className="list-disc ml-5">
                <li>
                  <span className="text-gray-800 dark:text-primary font-semibold">
                    20+ Years
                  </span>{" "}
                  Experience
                </li>
                <li>
                  <span className="text-gray-800 dark:text-primary font-semibold">
                    10 Years
                  </span>{" "}
                  Warranty
                </li>
                <li>
                  <span className="text-gray-800 dark:text-primary font-semibold">
                    $0
                  </span>{" "}
                  Call Out Fee
                </li>
                <li>
                  <span className="text-gray-800 dark:text-primary font-semibold">
                    FREE
                  </span>{" "}
                  Roof Inspections
                </li>
                <li>Fully Licensed & Insured</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover rounded-md"}
              alt="roofing"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container id="features">
        <div className="flex flex-col justify-center">
          <div className="text-4xl font-semibold text-center text-black dark:text-white">
            WHY <span className="text-primary">CHOOSE</span> US
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-900 dark:text-gray-100 text-xl font-semibold">
              <p className="flex gap-2">
                {" "}
                <CheckCircleIcon className="w-8 text-primary" /> #1 ROOFING
                CONTRACTORS
              </p>
            </div>
            <div className="pt-2 xl:pt-0 text-gray-900 dark:text-gray-100 text-xl font-semibold">
              <p className="flex gap-2">
                {" "}
                <CheckCircleIcon className="w-8 text-primary" /> FULLY LICENSED
                & INSURED
              </p>
            </div>
            <div className="text-gray-900 dark:text-gray-100 text-xl font-semibold">
              <p className="flex gap-2">
                {" "}
                <CheckCircleIcon className="w-8 text-primary" /> 24/7 EMERGENCY
                SERVICES
              </p>
            </div>
            <div className="xl:pt-1 text-gray-900 dark:text-gray-100 text-xl font-semibold">
              <p className="flex gap-2">
                {" "}
                <CheckCircleIcon className="w-8 text-primary" /> SAME DAY QUOTES
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
