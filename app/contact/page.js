import React from "react";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/navbar";

export default function page() {
  return (
    <>
      <div className="">
        <Navbar/>
        <Header
          heading="Contact Us"
          description="Leading the Way in Medical Excellence"
        />
      </div>
      <div className="px-[10%] my-32">
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              width="50%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=50%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div className="container   mx-auto flex">
            <div className="lg:w-1/2 md:w-1/2 bg-white ml-0 h-[100%] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Wayne is a highly skilled and professional surgeon, who's years
                of experience are clearly evident throughout his work. He has an
                extremely caring attitude towards his patients and always
                considers the wider aspects of their care, outside of the
                surgery itself.
              </p>
              <div className="relative mb-4">
                <label
                  for="name"
                  className="leading-7 text-sm text-gray-600 font-extrabold"
                >
                  Name:
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="w-96 ms-2   bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="email"
                  className="leading-7 text-sm text-gray-600 font-extrabold"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-96 ms-2  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="name"
                  className="leading-7 text-sm text-gray-600 font-extrabold"
                >
                  Phone Number:
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="w-80 	 ms-2  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600 font-extrabold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
