import React from "react";
import Link from "next/link";

const Footer = (props: any) => {
  return (
    <footer className="body-font bg-indigo-100 text-white">
      <div className="container mx-auto px-5 py-24">
        <div className="order-first flex flex-wrap text-center md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-indigo-700">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="cursor-pointer text-gray-700 hover:text-indigo-700">
                  First Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-700 hover:text-indigo-700">
                  Second Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-700 hover:text-indigo-700">
                  Third Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-700 hover:text-indigo-700">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-indigo-700">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="cursor-pointer text-gray-700 hover:text-indigo-700">
                  First Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-700 hover:text-indigo-700">
                  Second Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-700 hover:text-indigo-700">
                  Third Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-700 hover:text-indigo-700">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-indigo-700">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="cursor-pointer text-gray-700 hover:text-indigo-700">
                  First Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-700 hover:text-indigo-700">
                  Second Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-700 hover:text-indigo-700">
                  Third Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-700 hover:text-indigo-700">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>

          {/* <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
              SUBSCRIBE
            </h2>
            <div className="flex flex-wrap items-end justify-center md:flex-nowrap md:justify-start lg:flex-wrap xl:flex-nowrap">
              <div className="relative mr-2 w-40 sm:mr-4 sm:w-auto lg:mr-0 xl:mr-4">
                <label className="text-sm leading-7 text-gray-600">
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <button className="inline-flex flex-shrink-0 rounded border-0 bg-indigo-500 py-2 px-6 text-white hover:bg-indigo-600 focus:outline-none lg:mt-2 xl:mt-0">
                Button
              </button>
            </div>
            <p className="mt-2 text-center text-sm text-gray-500 md:text-left">
              Bitters chicharrones fanny pack
              <br className="hidden lg:block" />
              waistcoat green juice
            </p>
          </div> */}
        </div>
      </div>
      <div className="bg-gradient-to-tr from-indigo-600 to-violet-500 ">
        <div className="container mx-auto flex flex-col items-center px-5 py-6 sm:flex-row">
          <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <Link href={"/"}>
              <span className="pl-2 font-poppins text-xl  font-bold text-white md:pl-0 md:text-2xl">
                Adversion{" "}
                <span className="h-10 w-10 rounded-full bg-indigo-600 px-3 py-2 text-white">
                  X
                </span>
              </span>
            </Link>
          </a>
          <p className="mt-4 text-sm text-white sm:ml-6 sm:mt-0">
            © 2023 AdversionX —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
              target="_blank"
            >
              @Dhaka
            </a>
          </p>
          <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
