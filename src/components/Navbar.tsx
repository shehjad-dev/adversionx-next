import React, { useState } from "react";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";

const Navbar = ({ isMobileMenuOpen, handleMobileMenuClick }: any) => {
  const [isSubmenu1Open, setIsSubmenu1Open] = useState(false);
  const [isSubmenu2Open, setIsSubmenu2Open] = useState(false);

  const handleMouseOver1In = () => {
    setIsSubmenu1Open(true);
  };
  const handleMouseOver1Out = () => {
    setIsSubmenu1Open(false);
  };
  const handleMouseOver2In = () => {
    setIsSubmenu2Open(true);
  };
  const handleMouseOver2Out = () => {
    setIsSubmenu2Open(false);
  };
  return (
    <div className="relative mx-auto flex max-w-7xl flex-row items-center justify-between border-b-[1.7px] border-indigo-100 bg-white px-2 py-2 md:px-5">
      <Link href={"/"}>
        <span className="pl-2 font-poppins text-xl  font-bold text-indigo-600 md:pl-0 md:text-2xl">
          Adversion{" "}
          <span className="h-10 w-10 rounded-full bg-indigo-600 px-3 py-2 text-white">
            X
          </span>
        </span>
      </Link>
      <div className="block md:hidden">
        <button
          className="cursor-pointer rounded-md p-2 text-indigo-600 transition-all duration-100 ease-in hover:bg-indigo-100"
          onClick={() => handleMobileMenuClick()}
        >
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
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>

      <div className="hidden md:block">
        <ul className="flex items-center gap-x-8">
          <li className="relative">
            <Link
              href={"/"}
              onMouseOver={() => handleMouseOver1In()}
              onMouseLeave={() => handleMouseOver1Out()}
              data-parent="cars"
            >
              <span className="flex items-center gap-x-[0.34rem] py-4 font-semibold text-gray-600 transition-all duration-100 ease-in hover:text-indigo-600">
                <span>Services</span> <ChevronDownIcon />
              </span>
            </Link>
            {isSubmenu1Open && (
              <div
                className="transform-[-50%] absolute top-[3.3rem] right-[-29rem] flex animate-fade-in-up flex-row gap-0 rounded-lg border-[0.3px] border-indigo-300 bg-white py-3 px-2 shadow-lg"
                onMouseOver={() => handleMouseOver1In()}
                onMouseLeave={() => handleMouseOver1Out()}
              >
                <div className="border-r-[2px] border-indigo-200 px-3">
                  <h3 className="mb-2 px-2 font-semibold text-violet-600">
                    Digital Marketing
                  </h3>
                  <ul className="flex w-fit min-w-[14rem] flex-col gap-2 text-gray-700">
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          PPC Management
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Google Shopping Ads
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Google Ads Audit
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Display Advertising
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Facebook & Instagram Ads
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Content Marketing
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Search Engine Optimization
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="border-r-[2px] border-indigo-200 px-3">
                  <h3 className="mb-2 px-2 font-semibold text-violet-600">
                    Software
                  </h3>
                  <ul className="flex min-w-[14rem] flex-col gap-2 text-gray-700">
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Website Design
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Landing Page Design
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Website Development
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Apps Development
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="px-3">
                  <h3 className="mb-2 px-2 font-semibold text-violet-600">
                    Consultation
                  </h3>
                  <ul className="flex min-w-[14rem] flex-col gap-2 text-gray-700">
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Pre Marketing Consultation
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Market Research
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Problem Analysis
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link
              href={"/"}
              onMouseOver={() => handleMouseOver2In()}
              onMouseLeave={() => handleMouseOver2Out()}
            >
              <span className="relative flex items-center gap-x-[0.34rem] py-4 font-semibold text-gray-600 transition-all duration-100 ease-in hover:text-indigo-600">
                <span>Results</span> <ChevronDownIcon />
              </span>
            </Link>
            {isSubmenu2Open && (
              <div
                className=" absolute top-[3.8rem] flex animate-fade-in-up flex-row gap-0 rounded-lg border-[0.3px] border-indigo-300 bg-white py-3 px-2 shadow-lg"
                onMouseOver={() => handleMouseOver2In()}
                onMouseLeave={() => handleMouseOver2Out()}
              >
                <div className="px-3">
                  {/* <ul className="flex min-w-[160px] flex-col gap-2"> */}
                  <ul className="flex w-fit min-w-[14rem] flex-col gap-2 text-gray-700">
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Our Clients
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Case Studies
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <div className="w-full rounded-md bg-transparent py-2 px-2 hover:bg-indigo-100">
                          Testimonials
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link href={"/"}>
              <span className="flex items-center gap-x-[0.34rem] py-4 font-semibold text-gray-600 transition-all duration-100 ease-in hover:text-indigo-600">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <span className="flex items-center gap-x-[0.34rem] py-4 font-semibold text-gray-600 transition-all duration-100 ease-in hover:text-indigo-600">
                Contact Us
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <span className="rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 py-2 px-6 font-medium text-white transition-all duration-100 ease-in hover:from-indigo-700 hover:to-violet-500">
                Get Started
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
