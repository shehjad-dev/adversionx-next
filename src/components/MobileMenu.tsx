import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type Props = {};

const MobileMenu = ({ isMobileMenuOpen }: any) => {
  const [isSubmenu1Open, setIsSubmenu1Open] = useState(false);
  const [isSubmenu2Open, setIsSubmenu2Open] = useState(false);

  const handleClick1 = () => {
    if (isSubmenu2Open) {
      setIsSubmenu2Open(false);
    }
    setIsSubmenu1Open(!isSubmenu1Open);
  };
  const handleClick2 = () => {
    if (isSubmenu1Open) {
      setIsSubmenu1Open(false);
    }
    setIsSubmenu2Open(!isSubmenu2Open);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div className="absolute top-14 z-50 block w-full animate-fade-in-right bg-white pb-8 pt-4 md:hidden">
          <ul className="flex flex-col items-center gap-8">
            <li className={`relative w-full`}>
              <Link href={"/"} onClick={() => handleClick1()}>
                <span className="flex w-full items-center justify-between gap-x-[0.34rem] py-2 px-4 font-semibold text-gray-600 transition-all duration-100 ease-in hover:text-indigo-600">
                  <span>Services</span> <ChevronDownIcon />
                </span>
              </Link>
              {isSubmenu1Open && (
                <div className="mx-auto w-[92%] animate-fade-in-down">
                  {/* <div className="flex flex-col gap-0 overflow-y-scroll rounded-lg border-[0.3px] border-indigo-300 bg-white py-3 px-2 shadow-lg"> */}
                  <div className="border-b-[2px] border-indigo-200 py-3 px-3">
                    <h3 className="mb-2 px-2 font-semibold text-violet-600">
                      Digital Marketing
                    </h3>
                    <ul className="flex w-full flex-col gap-2 text-gray-700">
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
                  <div className="border-b-[2px] border-indigo-200 px-3 py-3 ">
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
                  <div className="border-b-[2px] border-indigo-200 px-3 py-3">
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
            <li className="relative w-full">
              <Link
                href={"/"}
                onClick={() => handleClick2()}
                /* onMouseOver={() => handleMouseOver2In()}
              onMouseLeave={() => handleMouseOver2Out()} */
              >
                <span className="flex w-full items-center justify-between gap-x-[0.34rem] py-2 px-4 font-semibold text-gray-600 transition-all duration-100 ease-in hover:text-indigo-600">
                  <span>Results</span> <ChevronDownIcon />
                </span>
              </Link>
              {isSubmenu2Open && (
                <div className="mx-auto w-[92%] animate-fade-in-down">
                  {/* <div className=" absolute top-[3.8rem] flex animate-fade-in-up flex-row gap-0 rounded-lg border-[0.3px] border-indigo-300 bg-white py-3 px-2 shadow-lg"> */}
                  <div className="border-b-[2px] border-indigo-200 px-3 py-3">
                    <ul className="flex w-full flex-col gap-2 text-gray-700">
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
            <li className="relative w-full">
              <Link href={"/"}>
                <span className="flex items-center gap-x-[0.34rem] py-2 px-4 font-semibold text-gray-600 transition-all duration-100 ease-in hover:text-indigo-600">
                  About
                </span>
              </Link>
            </li>
            <li className="relative w-full">
              <Link href={"/"}>
                <span className="flex items-center gap-x-[0.34rem] py-2 px-4 font-semibold text-gray-600 transition-all duration-100 ease-in hover:text-indigo-600">
                  Contact Us
                </span>
              </Link>
            </li>
            <li className="relative w-full px-4">
              <Link href={"/"}>
                <span className="block rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 py-2 px-6 text-center font-medium text-white transition-all duration-100 ease-in hover:from-indigo-700 hover:to-violet-500">
                  Get Started
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
