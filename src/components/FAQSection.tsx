import React from "react";

type Props = {};

const FAQSection = (props: Props) => {
  return (
    <div>
      <section className="text-gray-700">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 text-center">
            <h1 className="mx-auto max-w-[35rem] text-center text-2xl font-extrabold text-indigo-600 sm:text-3xl">
              Frequently Asked Question
            </h1>
            {/* <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
              The most common questions about how our business works and what
              can do for you.
            </p> */}
          </div>
          <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
            <div className="w-full px-4 py-2 lg:w-1/2">
              <details className="mb-4">
                <summary className="cursor-pointer rounded-md bg-indigo-100 py-2 px-4 font-semibold text-indigo-700">
                  How long will the google ads take?
                </summary>

                <span className="animate-fade-in text-gray-800">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer rounded-md bg-indigo-100 py-2 px-4 font-semibold text-indigo-700">
                  How to get a consultation?
                </summary>

                <span className="animate-fade-in text-gray-800">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer rounded-md bg-indigo-100 py-2 px-4 font-semibold text-indigo-700">
                  How to generate leads?
                </summary>

                <span className="animate-fade-in text-gray-800">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
            <div className="w-full px-4 py-2 lg:w-1/2">
              <details className="mb-4">
                <summary className="cursor-pointer rounded-md bg-indigo-100 py-2 px-4 font-semibold text-indigo-700">
                  Can I change the fb ads setup?
                </summary>

                <span className="animate-fade-in text-gray-800">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer rounded-md bg-indigo-100 py-2 px-4 font-semibold text-indigo-700">
                  How many sites I can create at once?
                </summary>

                <span className="animate-fade-in text-gray-800">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer rounded-md bg-indigo-100 py-2 px-4 font-semibold text-indigo-700">
                  How can I communicate with you?
                </summary>

                <span className="animate-fade-in text-gray-800">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
