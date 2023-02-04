import React from "react";
import Image from "next/image";
import Case1CompLogo from "../assets/MVPLogo.png";
import CaseStudyOneBg from "../assets/CaseStudyOne-bg.jpg";
import Link from "next/link";

type Props = {
  set?: string;
};

const CaseStudySection = (props: Props) => {
  return (
    <div className="bg-hero py-24">
      <div>
        <h3 className="mb-8 text-3xl font-extrabold text-indigo-600 sm:text-4xl">
          Case Study
        </h3>
      </div>
      {/* <div className="relative h-full w-full p-20 opacity-100 "> */}
      <div className="relative h-[380px] bg-opacity-20 bg-hero-pattern bg-center bg-no-repeat p-20 bg-blend-overlay sm:h-[500px] sm:bg-cover">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-30 h-full w-full bg-gradient-to-tr from-black to-black opacity-70"></div>
        <div className="absolute left-5 bottom-5 z-40 sm:left-20 sm:bottom-20">
          <div className="">
            <Image
              src={Case1CompLogo}
              alt="Case1CompLogo"
              width={120}
              height={100}
              className="mb-10 w-fit bg-[#003C68] px-3 py-3 sm:mb-24"
            />
          </div>
          <div className="">
            <h3 className="max-w-[35rem] text-2xl font-bold text-white sm:text-3xl">
              Slinger Bag becomes #1 tennis launcher in the US, with 12.6X
              Facebook ROAS
            </h3>
            <Link href={"/"}>
              {/* <span className="hover:shadow-[rgba(255, 255, 255, 1)] mt-4 flex w-fit animate-ping animate-fade-in gap-2 rounded-full bg-white py-1 px-5 text-indigo-700 hover:shadow-lg sm:py-2"> */}
              <span className="hover:shadow-[rgba(255, 255, 255, 1)] mt-4 flex w-fit animate-ping animate-fade-in gap-2 rounded-full bg-white py-2 px-3 text-indigo-700 transition-shadow hover:shadow-lg sm:py-2">
                <span className="text-base font-medium">Read Case Study</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* Flex row */}
      <div className="mt-12 flex h-[1200px] flex-col justify-between gap-10 sm:h-fit sm:flex-row">
        <div className="relative h-[380px] flex-1 bg-opacity-20 bg-hero-pattern bg-center bg-no-repeat p-20 bg-blend-overlay sm:h-[500px] sm:bg-cover ">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-30 h-full w-full bg-gradient-to-tr from-black to-black opacity-70"></div>
          <div className="absolute left-5 bottom-5 z-40 sm:left-8 sm:bottom-8">
            <div className="">
              <Image
                src={Case1CompLogo}
                alt="Case1CompLogo"
                width={120}
                height={100}
                className="mb-10 w-fit bg-[#003C68] px-3 py-3"
              />
            </div>
            <div className="">
              <h3 className="max-w-[15rem] text-2xl font-bold text-white sm:text-2xl">
                Slinger Bag becomes #1 tennis launcher in the US, with 12.6X
                Facebook ROAS
              </h3>
              <Link href={"/"}>
                {/* <span className="hover:shadow-[rgba(255, 255, 255, 1)] mt-4 flex w-fit animate-ping animate-fade-in gap-2 rounded-full bg-white py-1 px-5 text-indigo-700 hover:shadow-lg sm:py-2"> */}
                <span className="hover:shadow-[rgba(255, 255, 255, 1)] mt-4 flex w-fit animate-ping animate-fade-in gap-2 rounded-full bg-white py-2 px-3 text-indigo-700 transition-shadow hover:shadow-lg sm:py-2">
                  <span className="text-base font-medium">Read Case Study</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-[380px] flex-1 bg-opacity-20 bg-hero-pattern bg-center bg-no-repeat p-20 bg-blend-overlay sm:h-[500px] sm:bg-cover ">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-30 h-full w-full bg-gradient-to-tr from-black to-black opacity-70"></div>
          <div className="absolute left-5 bottom-5 z-40 sm:left-8 sm:bottom-8">
            <div className="">
              <Image
                src={Case1CompLogo}
                alt="Case1CompLogo"
                width={120}
                height={100}
                className="mb-10 w-fit bg-[#003C68] px-3 py-3"
              />
            </div>
            <div className="">
              <h3 className="max-w-[15rem] text-2xl font-bold text-white sm:text-2xl">
                Slinger Bag becomes #1 tennis launcher in the US, with 12.6X
                Facebook ROAS
              </h3>
              <Link href={"/"}>
                {/* <span className="hover:shadow-[rgba(255, 255, 255, 1)] mt-4 flex w-fit animate-ping animate-fade-in gap-2 rounded-full bg-white py-1 px-5 text-indigo-700 hover:shadow-lg sm:py-2"> */}
                <span className="hover:shadow-[rgba(255, 255, 255, 1)] mt-4 flex w-fit animate-ping animate-fade-in gap-2 rounded-full bg-white py-2 px-3 text-indigo-700 transition-shadow hover:shadow-lg sm:py-2">
                  <span className="text-base font-medium">Read Case Study</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-[380px] flex-1 bg-opacity-20 bg-hero-pattern bg-center bg-no-repeat p-20 bg-blend-overlay sm:h-[500px] sm:bg-cover ">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-30 h-full w-full bg-gradient-to-tr from-black to-black opacity-70"></div>
          <div className="absolute left-5 bottom-5 z-40 sm:left-8 sm:bottom-8">
            <div className="">
              <Image
                src={Case1CompLogo}
                alt="Case1CompLogo"
                width={120}
                height={100}
                className="mb-10 w-fit bg-[#003C68] px-3 py-3"
              />
            </div>
            <div className="">
              <h3 className="max-w-[15rem] text-2xl font-bold text-white sm:text-2xl">
                Slinger Bag becomes #1 tennis launcher in the US, with 12.6X
                Facebook ROAS
              </h3>
              <Link href={"/"}>
                <span className="hover:shadow-[rgba(255, 255, 255, 1)] mt-4 flex w-fit animate-ping animate-fade-in gap-2 rounded-full bg-white py-2 px-3 text-indigo-700 transition-shadow hover:shadow-lg sm:py-2">
                  <span className="text-base font-medium">Read Case Study</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Link href={"/"}>
          <span className="hover:shadow-[rgba(255, 255, 255, 1)] mt-4 flex w-fit animate-ping animate-fade-in items-center gap-2 border-b-[2px] border-b-white bg-transparent py-0 px-0 text-indigo-700 transition-all duration-75 ease-in hover:border-b-indigo-600 sm:py-0">
            <span className="text-base font-medium">See All</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudySection;
