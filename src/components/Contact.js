import React from "react";

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Contact = () => {
  return (
    <>
      <div className=" w-full px-5 md:px-0 bg-gray-200   ">
        <div className=" grid sm:grid-cols-2 max-w-7xl bg-gray-200 items-start gap-16 py-24 mx-auto">
        <div>
          <h1 className="text-gray-800 text-3xl font-bold">Let's Talk</h1>
          <p className="text-sm text-gray-500 mt-4">
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </p>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-semibold">Email</h2>
            <ul className="mt-4">
              <li className="flex gap-3 items-center">
                <IoIosMail size={35} className="text-primary" />

               info@example.com
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-semibold">Socials</h2>

            <ul className="flex mt-4 space-x-4">
              <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <FaFacebook size={35}  className="text-primary" />
              </li>
              <li className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <FaGithub size={35}  className="text-black" />
              </li>
              <li className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <FaLinkedin size={35} className="text-primary"  />
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl py-3 px-4 bg-gray-100 text-gray-800 text-sm border border-gray-600  outline-blue-500 focus:bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
             className="w-full rounded-xl py-3 px-4 bg-gray-100 text-gray-800 text-sm border border-gray-600  outline-blue-500 focus:bg-transparent"
          />
          <input
            type="text"
            placeholder="Subject"
          className="w-full rounded-xl py-3 px-4 bg-gray-100 text-gray-800 text-sm border border-gray-600  outline-blue-500 focus:bg-transparent"
          />
          <textarea
            placeholder="Message"
            rows="6"
  className="w-full rounded-xl py-3 px-4 bg-gray-100 text-gray-800 text-sm border border-gray-600  outline-blue-500 focus:bg-transparent"
          ></textarea>
          <button
            type="button"
            className="text-white rounded-xl bg-blue-500 hover:bg-blue-600 tracking-wide  text-sm px-4 py-3 w-full !mt-6"
          >
            Send
          </button>
        </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
