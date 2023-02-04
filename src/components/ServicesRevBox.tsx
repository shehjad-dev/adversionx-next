import React from "react";
import Link from "next/link";

type Props = {
  set?: string;
};

const ServicesRevBox = (props: Props) => {
  return (
    <div className="gap-18 flex flex-row-reverse py-20">
      <div className="ml-14 flex w-[50%] flex-col justify-center gap-8">
        <h3 className="max-w-[35rem] text-2xl font-extrabold text-indigo-600 sm:text-3xl">
          100% Strategic PPC Management
        </h3>
        <p className="max-w-[29rem] text-lg font-medium text-gray-600">
          We take the time to learn the dynamics of your business, enabling us
          to develop unique strategies that will align with your Pay Per Click
          campaign objectives. We are an AdWords management company that simply
          does things differently.
        </p>
      </div>
      <div className="flex w-[50%] gap-5">
        <div className="w-[50%] border-t-2 border-t-indigo-400 bg-white shadow-xl">
          <div className="p-6">
            <div className="mb-2 text-gray-700">
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
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-700">
              Full Service Google Ads PPC Management
            </h4>
          </div>

          <div className="bg-gradient-to-tr from-indigo-800 to-violet-500 p-6">
            <p className="mb-4 text-white">
              We take the time to learn the dynamics of your business, enabling
              us to develop unique strategies that will align with your Pay Per
              Click campaign objectives.
            </p>
            <Link href={"/"}>
              <span className="mt-4 flex w-fit animate-ping animate-fade-in gap-2 rounded-full border-2 border-white bg-transparent py-2 px-3 text-white transition-all duration-75 ease-in hover:bg-white hover:text-indigo-700 hover:shadow-lg hover:shadow-indigo-700 sm:py-2">
                <span className="text-base font-medium">Learn More</span>
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
                      d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="w-[50%] border-t-2 border-t-indigo-400 bg-white shadow-xl">
          <div className="p-6">
            <div className="mb-2 text-gray-700">
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
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-700">
              Full Service Google Ads PPC Management
            </h4>
          </div>

          <div className="bg-gradient-to-tr from-indigo-800 to-violet-500 p-6">
            <p className="mb-4 text-white">
              We take the time to learn the dynamics of your business, enabling
              us to develop unique strategies that will align with your Pay Per
              Click campaign objectives.
            </p>
            <Link href={"/"}>
              <span className="mt-4 flex w-fit animate-ping animate-fade-in gap-2 rounded-full border-2 border-white bg-transparent py-2 px-3 text-white transition-all duration-75 ease-in hover:bg-white hover:text-indigo-700 hover:shadow-lg hover:shadow-indigo-700 sm:py-2">
                <span className="text-base font-medium">Learn More</span>
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
                      d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesRevBox;
