import React, { useEffect } from "react";
import Link from "next/link";

type Props = {};

const HeroSection = (props: any) => {
  return (
    <div className="relative h-[80vh] sm:h-[600px]">
      <div className="absolute top-48 left-5 z-40 sm:left-28">
        <h1 className="max-w-[35rem] text-2xl font-extrabold text-white sm:text-3xl">
          Data Driven Digital Marketing Agency
        </h1>
        <p className="mt-4 max-w-[90%] text-[0.9rem] font-medium text-white sm:mt-6 sm:max-w-[20rem] sm:text-base ">
          We help service-based & ecommerce companies to implement strategic
          marketing solutions to increase leads and sales.
        </p>
        <Link href={"/"}>
          <span className="mt-4 flex w-fit animate-ping animate-fade-in gap-2 rounded-full bg-white py-2 px-3 text-indigo-700 hover:shadow-lg hover:shadow-indigo-700 sm:py-2">
            <span className="text-base font-medium">Explore Services</span>
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
      <ul className="background relative z-[10] h-full w-[600px] overflow-hidden opacity-20">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[5] h-full w-full bg-gradient-to-tr from-indigo-800 to-violet-500 opacity-100"></div>
    </div>
  );
};

export default HeroSection;
